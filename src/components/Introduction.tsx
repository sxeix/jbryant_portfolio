import "./Introduction.css";

function Introduction() {
    return (
        <div className="introduction__container">
            <h1 className="introduction__title">
                About me
            </h1>
            <div className="introduction__text">
                <p>
                    Oxfordshire based Software Developer with 3+ years experience building web applications in the fintech sector. Presently working full-stack at Webexpenses with a heavy focus in Java 8.
                </p>
                <p>
                    Very experienced with a varity of ERP systems, having worked extensively with Netsuite, Sage Intacct and Microsoft Business central APIs. Additionally, developing new features using third party services such as Wise and Adyen. Often being consulted by other teams around the business to assist with diagnosis of problems.
                </p>
                <p>
                    Adept with a multitude of technologies such as Spring Boot, AWS, JUnit, Git etc. As well as being very familiar with working in an Agile environment.
                </p>
                <p>
                    Having developed solid foundations at Oxford Brookes University, achieving a First Class honours in Computer Science, I have been able to apply them directly in a field I enjoy and am eager to continue progressing in.
                </p>
            </div>
        </div>
    );
}

export default Introduction;