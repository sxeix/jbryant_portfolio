import "./FooterContainer.css";
import GithubMark from "./icons/GithubMark";
import { motion } from "motion/react"
import Linkedin from "./icons/Linkedin";

interface FooterProps {
    ref: React.RefObject<HTMLDivElement | null>;
}

function FooterContainer(props: FooterProps) {

    return (
        <div className="footer__container" ref={props.ref}>
            <div className="footer__contact">
                <h2>Want to work with me? Great!</h2>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:sxeixarts@gmail.com"
                    className="footer__contact__button"
                >
                    Contact me here
                </motion.a>
            </div>
            <div className="footer__socials">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/jamesjbryant/"
                    className="footer__socials__button"
                >
                    <Linkedin sizeInPixels="50px" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/sxeix"
                    className="footer__socials__button"
                >
                    <GithubMark sizeInPixels="50px" />
                </motion.a>
            </div>
        </div>
    );
}

export default FooterContainer;