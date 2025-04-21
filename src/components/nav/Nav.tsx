import { motion } from "motion/react"
import "./Nav.css";
import NavProps from "./NavInterfaces";

function Nav(props: NavProps) {

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
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
                delay: 0.5
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="nav">
            <div className="button_list">
                <motion.ul
                    initial="hidden"
                    animate="visible"
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
        </div>
    );
}

export default Nav;
