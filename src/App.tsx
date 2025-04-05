import { useRef } from 'react';
import BaseContainer from './components/container/BaseContainer.js';
import HeaderContainer from './components/HeaderContainer.jsx';
import Introduction from './components/Introduction.js';
import Nav from './components/nav/Nav.js';
import NavProps from './components/nav/NavInterfaces.js';
import Skills from './components/Skills.js';
import ProProjects from './components/ProProjects.js';
import PersonalProjects from './components/PersonalProjects.js';

function App() {

    const headerRef = useRef<HTMLDivElement | null>(null);
    const introductionRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const proProjectsRef = useRef<HTMLDivElement | null>(null);
    const personalProjectsRef = useRef<HTMLDivElement | null>(null);

    const navSections: NavProps = {
        sections:[
            {
                ref:  headerRef,
                text: "Home"
            },
            {
                ref:  introductionRef,
                text: "Introduction"
            },
            {
                ref:  skillsRef,
                text: "Skills"
            },
            {
                ref:  proProjectsRef,
                text: "Projects"
            },
            {
                ref: personalProjectsRef,
                text: "Personal Projects"
            }
        ]
    };

    // add motion scroll here
    return (
        <div className="page">
            <Nav sections={navSections.sections} />
            {/* Overarching stagger buttons - see motion js stagger */}
            <BaseContainer containerContent={<HeaderContainer/>} sectionName='header' ref={headerRef}/>
            <BaseContainer containerContent={<Introduction/>} sectionName='introduction' ref={introductionRef}/>
            <BaseContainer containerContent={<Skills/>} sectionName='skills' ref={skillsRef}/>
            <BaseContainer containerContent={<ProProjects/>} sectionName='proProjects' ref={proProjectsRef}/>
            <BaseContainer containerContent={<PersonalProjects/>} sectionName='personalProjects' ref={personalProjectsRef}/>
            {/* Footer */}
        </div>
    );
}

export default App;
