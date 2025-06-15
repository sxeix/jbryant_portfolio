import Box from "./box/Box";
import "./Introduction.css";

function Introduction() {

    const boxSizeWidth = "20em";
    const boxSizeHeight = "15em";

    return (
        <div className="introduction__container">
            <h1 className="introduction__title">
                About me
            </h1>
            <div className="introduction__items">
                <Box
                    title={"Who Am I?"}
                    desc={"Oxford based fintech software engineer with 3+ years of professional experience. Currently at Webexpenses."}
                    width={boxSizeWidth}
                    height={boxSizeHeight}
                    backgroundColor={"#84A4F5"}
                    color="#FEFEFE"
                />
                <Box
                    title={"Education"}
                    desc={"Graduated from Oxford Brookes University 2022 attaining a First Class with Honours."}
                    width={boxSizeWidth}
                    height={boxSizeHeight}
                />
                <Box
                    title={"ERP Integrations"}
                    desc={"Experiencd with ERP system APIs, including Netsuite, Sage Intacct, and Microsoft Business Central. Additional third-party APIs such as Wise and Adyen."}
                    width={boxSizeWidth}
                    height={boxSizeHeight}
                    backgroundColor={"#84A4F5"}
                    color="#FEFEFE"
                />
                <Box
                    title={"Java 8 to 21"}
                    desc={"Throughout my career I have used Java to build microservices with Spring Boot, Hibernate, JUnit, Mockito and more!"}
                    width={boxSizeWidth}
                    height={boxSizeHeight}
                />
                <Box
                    title={"AWS"}
                    desc={"Practical experience with leveraging AWS capabilities for planning and implementation like SQS, Secrets Manager, Lambda, S3, and CloudFormation."}
                    width={boxSizeWidth}
                    height={boxSizeHeight}
                    backgroundColor={"#84A4F5"}
                    color="#FEFEFE"
                />
                <Box
                    title={"Frontend"}
                    desc={"Adept in frontend development. I've worked on variety UIs frameworks like Angular (TS), React (TS) and more!"}
                    width={boxSizeWidth}
                    height={boxSizeHeight}
                />
                <Box
                    title={"Database"}
                    desc={"Familiar with both Microsoft SQL Server and PostgreSQL (AWS Aurora), I aim for performant and targeted queries. Using Flyway for migration control."}
                    width={boxSizeWidth}
                    height={boxSizeHeight}
                    backgroundColor={"#84A4F5"}
                    color="#FEFEFE"
                />
            </div>
        </div>
    );
}

export default Introduction;