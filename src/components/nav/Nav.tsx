import { motion } from "motion/react"
import "./Nav.css";
import NavProps from "./NavInterfaces";
import { useState } from "react";

function Nav(props: NavProps) {

    const [openNavDisplay, setOpenNavDisplay] = useState(false);

    const executeScroll = (ref: React.RefObject<HTMLElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                }
            );
        }
        setOpenNavDisplay(false);
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                delay: 0.2
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const navExpandClickEvent = () => {
        setOpenNavDisplay(true);
    };

    return (
        <div className="nav">
            <div className="nav__mobile">
                {openNavDisplay ?
                    <motion.div
                        className="nav__mobile_options"
                        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                        animate={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="button_list">
                            <motion.ul
                                initial="hidden"
                                animate={openNavDisplay ? "visible" : "hidden"}
                                exit="hidden"
                                variants={listVariants}
                                style={{ listStyleType: 'none', padding: 0 }}
                                className="nav__list__container"
                            >
                                {props.sections.map((section, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className="nav__list"
                                    >
                                        <motion.a
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => executeScroll(section.ref)}
                                            className="nav__clickable"
                                        >
                                            {section.text}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.div>
                    :
                    <div className="nav_button">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className="nav__button_triple" onClick={navExpandClickEvent}
                        >
                            &#9776;
                        </motion.a>
                    </div>
                }
            </div>
        </div>
    );
}

export default Nav;
