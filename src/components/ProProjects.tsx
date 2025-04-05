import Section from "./section/Section";
import SectionProps from "./section/SectionInterface";
import "./ProProjects.css";

const wiseSection: SectionProps = {
    title: "Wise Payments",
    content: `This was the first major project I played a role in at Webexpenses. 
    Built using Java 8 over the course of 5 months my team and I built a system that enabled finance teams to pay their employee expenses directly from the Webexpenses product using Wise Payments. 
    I designed various parts of this project, such as an email notification system utilising AWS Lambda, SQS, SNS, SES and EventBridge which would notify finance admins of outstanding payments and the claimants when their claim had been processed. 
    Additionally, another area I lead building was the receipt handling mechanism which would listen to a webhook for notification of a payment and request the receipt from Wise's API and store it in an S3 bucket which could be retrieved via a presigned URL. 
    This was also my first exposure to AWS Cloudformation.`,
}

const integrationSection: SectionProps = {
    title: "Integrations",
    content: `After Cloudelements announced an end of life for their product, I was enlisted alongside a principle engineer to lead a re-write of the product's integration with Cloudelements and work directly with Netsuite, Sage Intacct and Business Central APIs. 
    This involved a lot of working under pressure and learning on the fly. Exposing myself constantly to the challenges and capabilities of these APIs. This was done in a phased approach so we could steadily migrate the clients, conciously maintaining backwards compatibility. 
    Using Java 21 this was a great opportunity to begin exploring the languages newer features. As a result of this project I undertook the responsibility of being a point of contact for in-depth technical support to the other teams regarding integrations. 
    Even using IntelliJ profiling tools to diagnose and repair performance problems (such as a Memory Leak in this case).`,
}

function ProProjects() {
    return (
        <div className="projects__container">
            <h1 className="projects__title">
                Professional Projects
            </h1>
            <div className="projects__text">
                <Section title={integrationSection.title} content={integrationSection.content}></Section>
                <Section title={wiseSection.title} content={wiseSection.content}></Section>
            </div>
        </div>
    );
}

export default ProProjects;