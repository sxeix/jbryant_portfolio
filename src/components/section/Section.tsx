import "./Section.css";
import SectionProps from "./SectionInterface";

function Section(props: SectionProps) {

    const githubIcon = function () {
        
        if (props.githubLink) {
            return <div>hello</div>
        }
    }

    return (
        <div className="section__container left">
            <h2 className="section__title">
                {props.title}
                {githubIcon()}
            </h2>
            <p className="section__content">
                {props.content}
            </p>
        </div>
    );
}

export default Section;