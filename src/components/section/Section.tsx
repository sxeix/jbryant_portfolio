import "./Section.css";
import SectionProps from "./SectionInterface";
import GithubMark from "../icons/GithubMark";
import { motion } from "motion/react";

function Section(props: SectionProps) {

    return (
        <div className="section__container left">
            <h2 className="section__title">
                {props.title}
                {
                    props.githubLink ?
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.90 }}
                            href={props.githubLink}
                            target="_blank"
                            className="github"
                        >
                            <GithubMark sizeInPixels="20px" fillColor="#84A4F5" />
                        </motion.a>
                        :
                        null
                }

            </h2>
            <p className="section__content">
                {props.content}
            </p>
        </div>
    );
}

export default Section;