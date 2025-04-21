import { useRef } from 'react';
import BaseContainer from './components/container/BaseContainer.tsx';
import HeaderContainer from './components/HeaderContainer.tsx';
import Introduction from './components/Introduction.tsx';
import Nav from './components/nav/Nav.tsx';
import NavProps from './components/nav/NavInterfaces.tsx';
import Skills from './components/Skills.tsx';
import ProProjects from './components/ProProjects.tsx';
import PersonalProjects from './components/PersonalProjects.tsx';
import FooterContainer from './components/FooterContainer.tsx';
import { motion, useScroll } from 'motion/react';

function App() {

    const headerRef = useRef<HTMLDivElement | null>(null);
    const introductionRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const proProjectsRef = useRef<HTMLDivElement | null>(null);
    const personalProjectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const navSections: NavProps = {
        sections: [
            {
                ref: headerRef,
                text: "Home"
            },
            {
                ref: introductionRef,
                text: "Introduction"
            },
            {
                ref: skillsRef,
                text: "Skills"
            },
            {
                ref: proProjectsRef,
                text: "Projects"
            },
            {
                ref: personalProjectsRef,
                text: "Personal Projects"
            },
            {
                ref: contactRef,
                text: "Contact Me"
            }
        ]
    };

    const { scrollYProgress } = useScroll();

    return (
        <div className="page">
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#84A4F5",
                }}
            />
            <Nav sections={navSections.sections} />
            <BaseContainer containerContent={<HeaderContainer />} sectionName='header' ref={headerRef} />
            <BaseContainer containerContent={<Introduction />} sectionName='introduction' ref={introductionRef} />
            <BaseContainer containerContent={<Skills />} sectionName='skills' ref={skillsRef} />
            <BaseContainer containerContent={<ProProjects />} sectionName='proProjects' ref={proProjectsRef} />
            <BaseContainer containerContent={<PersonalProjects />} sectionName='personalProjects' ref={personalProjectsRef} />
            <FooterContainer ref={contactRef} />
        </div>
    );
}

export default App;
