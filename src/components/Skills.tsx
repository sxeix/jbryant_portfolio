import Section from "./section/Section";
import SectionProps from "./section/SectionInterface";
import "./Skills.css";

const javaSection: SectionProps = {
    title: "Java",
    content: `By far my strongest language and the one I am most comfortable working in. I have used Java extensively throughout university and throughout my entire career as a software developer. 
    Primarily my experience with Java is based around building microservices with Spring Boot paired with Hibernate, JUnit, Mockito etc. 
    Additionally, working closely with AWS features and resources to host and orchestrate the entire suite of microservices. 
    Working on code ranging from Java 8 through to 21, I've been able to get hands on with older legacy code as well as modern standards which has greatly aided my ability to deal with different styles and standards of Java. `
}

const awsSection: SectionProps = {
    title: "AWS",
    content: `In recent time I have become increasingly familiar and hands on with building applications that can leverage the AWS capabilities. Namely SQS, Secrets Manager, Parameter Store, SNS, Lambda, S3, SES, Cloudformation and EventBridge. 
    Further working closely with Infastructure developers to ensure deployment goes well and diagnose any issues in production.`
}

const sqlAndPostgresqlSection: SectionProps = {
    title: "SQL/Postgresql",
    content: `I have equal experience using both Microsoft SQL Server and PostgreSQL AWS Aurora. Ensuring that the written queries are performant and targetted. Familiar with stored procedures, indexes, roles and locking etc.
    Using Flyway for migration of databases, I have conciously ensured that new scripts are re-runnable and do not lose data.`
}

const javaScriptSection: SectionProps = {
    title: "JS/TS/React/Angular",
    content: `I am very capable at front end development and have regularly worked on a multitude of web application UIs throughout my career. 
    Initially starting with TS Angular and moving to a JS environment which is now being migrated to TS React, I have to adapt constantly to work in all of these scenarios.
    I have further been very hands-on utilising frameworks such as jQuery, Handlebars, KendoJs as well as Gherkin, Selenium, Protractor. Even going as far as establishing a Functional Verification Test suite to run in a pipeline`
}

function Skills() {
    return (
        <div className="skills__container">
            <h1 className="skills__title">
                Skills
            </h1>
            <div className="skills__text">
                <Section title={javaSection.title} content={javaSection.content}></Section>
                <Section title={awsSection.title} content={awsSection.content}></Section>
                <Section title={sqlAndPostgresqlSection.title} content={sqlAndPostgresqlSection.content}></Section>
                <Section title={javaScriptSection.title} content={javaScriptSection.content}></Section>
            </div>
        </div>
    );
}

export default Skills;