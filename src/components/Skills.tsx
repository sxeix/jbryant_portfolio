import Section from "./section/Section";
import SectionProps from "./section/SectionInterface";
import "./Skills.css";

const javaSection: SectionProps = {
    title: "Java",
    content: "Nostrud dolor enim tempor in minim. Reprehenderit laborum exercitation qui est laborum tempor magna tempor cupidatat excepteur officia sunt. Ut ut mollit proident magna proident aute non irure ea elit consectetur nulla. Qui officia deserunt labore dolor sint dolor commodo qui ullamco id. Ipsum sunt labore tempor culpa. Veniam eiusmod aliqua officia aliqua ipsum aliquip culpa nostrud ut sint. Do incididunt nostrud ullamco id ut dolor elit ut.",
    alignment: "left"
}

const javaScriptSection: SectionProps = {
    title: "Javascript",
    content: "Irure dolor ullamco nulla aliquip duis mollit duis magna mollit Lorem duis. Irure culpa incididunt duis do dolore sunt. Veniam magna consequat ullamco aliquip non consectetur ut reprehenderit. Commodo velit ex do duis laborum cupidatat cillum aliquip ullamco sunt commodo. Duis aute consectetur elit cillum incididunt sit. Elit minim exercitation ex laborum veniam minim in enim irure nisi. Qui enim Lorem sit ad culpa deserunt aute aliqua anim nulla enim exercitation et.",
    alignment: "left"
}

const sqlAndPostgresqlSection: SectionProps = {
    title: "SQL/Postgresql",
    content: "Nostrud magna aliqua enim consequat est aliquip nulla labore ea. Nisi magna esse cillum irure ad minim. Ad in sit pariatur consectetur deserunt. Quis cillum id amet ex tempor sint incididunt. Laborum aute culpa officia adipisicing nisi reprehenderit aute id proident proident mollit ea. Commodo pariatur ut deserunt voluptate in ullamco ipsum sunt in culpa tempor nostrud irure. Sit eu velit voluptate labore nisi sunt.",
    alignment: "left"
}

const reactSection: SectionProps = {
    title: "React",
    content: "Nostrud magna aliqua enim consequat est aliquip nulla labore ea. Nisi magna esse cillum irure ad minim. Ad in sit pariatur consectetur deserunt. Quis cillum id amet ex tempor sint incididunt. Laborum aute culpa officia adipisicing nisi reprehenderit aute id proident proident mollit ea. Commodo pariatur ut deserunt voluptate in ullamco ipsum sunt in culpa tempor nostrud irure. Sit eu velit voluptate labore nisi sunt.",
    alignment: "left"
}

function Skills() {
    return (
        <div className="skills__container">
            <h1 className="skills__title">
                Skills
            </h1>
            <div className="skills__text">
                <Section title={javaSection.title} content={javaSection.content} alignment={javaSection.alignment}></Section>
                <Section title={javaScriptSection.title} content={javaScriptSection.content} alignment={javaScriptSection.alignment}></Section>
                <Section title={sqlAndPostgresqlSection.title} content={sqlAndPostgresqlSection.content} alignment={sqlAndPostgresqlSection.alignment}></Section>
                <Section title={reactSection.title} content={reactSection.content} alignment={reactSection.alignment}></Section>
            </div>
        </div>
    );
}

export default Skills;