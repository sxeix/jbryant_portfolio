import Section from "./section/Section";
import SectionProps from "./section/SectionInterface";
import "./ProProjects.css";

const javaSection: SectionProps = {
    title: "Wise Payments",
    content: "Nostrud dolor enim tempor in minim. Reprehenderit laborum exercitation qui est laborum tempor magna tempor cupidatat excepteur officia sunt. Ut ut mollit proident magna proident aute non irure ea elit consectetur nulla. Qui officia deserunt labore dolor sint dolor commodo qui ullamco id. Ipsum sunt labore tempor culpa. Veniam eiusmod aliqua officia aliqua ipsum aliquip culpa nostrud ut sint. Do incididunt nostrud ullamco id ut dolor elit ut.",
    alignment: "left"
}

function ProProjects() {
    return (
        <div className="projects__container">
            <h1 className="projects__title">
                Professional Projects
            </h1>
            <div className="projects__text">
                <Section title={javaSection.title} content={javaSection.content} alignment={javaSection.alignment}></Section>
            </div>
        </div>
    );
}

export default ProProjects;