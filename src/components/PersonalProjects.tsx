import Section from "./section/Section";
import SectionProps from "./section/SectionInterface";
import "./PersonalProjects.css";

const smolUrl: SectionProps = {
    title: "Smol url",
    content: `My most recent project, fully functional, but not yet complete. This is a small web application designed for URL shortening using UUIDv5. 
    Admittedly, it is not the shortest URL generation, but it is a consistent shortness compared to most URLs you encounter. I wanted to have a reason to learn NoSQL (MongoDB in this case) so I thought this would be an ideal scenario. 
    Using specifically UUIDv5 I can guarentee uniqueness and repeated generation for a given URL  and use this UUID as a key to access the NoSQL record. I also used this as a chance to familiarise myself with Docker. Built using Spring Boot, MongoDB and Docker, including a Vue based UI which is yet to be completed. 
    This is all still in progress and I have intent to fully host it.`,
    githubLink: "google.com"
}

const thisPortfolio: SectionProps = {
    title: "This website",
    content: `Wanting a reason to exercise my React abilities, I picked it as my language of choice for this website you are reading, despite how it could have easily been developed without a framework/library. 
    The animations are done using Motion and the choice of hosting is TBD.`,
    githubLink: "google.com"
}

const adaptiveTypingFlaskSection: SectionProps = {
    title: "Adaptive Typing Backend",
    content: `Probably my favourite personal project done for my final year University Project albeit, one of my older projects. 
    Utilising Markov Chains to interpret a person's typing habits and identify their weakest character combinations; calculating habits to generate a wordset that they can type out in the form of a typing test. 
    This simple form of AI would iteratively improve it's understanding of the user's typing habits and force them to practice and progress. This was powered using Python in combination with Flask. `,
    githubLink: "google.com"
}

const adaptiveTypingUISection: SectionProps = {
    title: "Adaptive Typing UI",
    content: `I wanted this project to be run local as to avoid hosting anything due to time constraints of it being a deadlined project. This led me to chosing Electon with Angular as they were best suited for this with my skillset at the time. 
    Angular was at the time my most proficient language and Electon would allow me to develop this as if it were a web application but run it locally. I focused on developing something simple yet functional that would be easy to use yet informative to the user. 
    Displaying statistics as well as allowing them to see which key the pressed without having to look down at a keyboard.`,
    githubLink: "google.com"
}

function PersonalProjects() {
    return (
        <div className="projects__container">
            <h1 className="projects__title">
                Personal Projects
            </h1>
            <div className="projects__text">
                <Section title={smolUrl.title} content={smolUrl.content} githubLink={smolUrl.githubLink}></Section>
                <Section title={thisPortfolio.title} content={thisPortfolio.content} githubLink={thisPortfolio.githubLink}></Section>
                <Section title={adaptiveTypingFlaskSection.title} content={adaptiveTypingFlaskSection.content} githubLink={adaptiveTypingFlaskSection.githubLink}></Section>
                <Section title={adaptiveTypingUISection.title} content={adaptiveTypingUISection.content} githubLink={adaptiveTypingUISection.githubLink}></Section>
            </div>
        </div>
    );
}

export default PersonalProjects;