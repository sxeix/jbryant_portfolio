import "./Section.css";
import SectionProps from "./SectionInterface";
import GithubMark from "../icons/GithubMark";

function Section(props: SectionProps) {

    return (
        <div className="section__container left">
            <h2 className="section__title">
                {props.title}
                {
                    props.githubLink ?
                        <a href={props.githubLink} className="github">
                            <GithubMark sizeInPixels="20px" fillColor="#84A4F5"/>
                        </a>
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