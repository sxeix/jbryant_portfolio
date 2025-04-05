import "./Footer.css";
import GithubMark from "./icons/GithubMark";
import LinkedIn from "./icons/Linkedin";

function Footer() {

    return (
        <div className="footer__container">
            <div className="footer__contact">
                <h2>
                    Want to work with me? Great!
                </h2>
                <a href="mailto:sxeixarts@gmail.com" className="footer__contact__button">Contact me here</a>
            </div>
            <div className="footer__socials" >
                <a href="https://www.linkedin.com/in/jamesjbryant/" className="footer__socials__button">
                    <LinkedIn sizeInPixels="50px"/>
                </a>
                <a href="https://github.com/sxeix" className="footer__socials__button" >
                    <GithubMark sizeInPixels="50px" />
                </a>
            </div>
        </div>
    );
}

export default Footer;