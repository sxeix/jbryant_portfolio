import "./Section.css";
import SectionProps from "./SectionInterface";


function Section(props: SectionProps) {

    const alignmentStyle: string = props.alignment === 'left' ? "section__container left" :"section__container right";

    return (
        <div className={alignmentStyle}>
            <h2 className="section__title">
                {props.title}
            </h2>
            <p className="section__content">
                {props.content}
            </p>
        </div>
    );
}

export default Section;