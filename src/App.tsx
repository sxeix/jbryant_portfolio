import { useRef } from 'react';
import BaseContainer from './components/container/BaseContainer.js';
import HeaderContainer from './components/HeaderContainer.jsx';
import Introduction from './components/Introduction.js';
import Nav from './components/nav/Nav.js';
import NavProps from './components/nav/NavInterfaces.js';
import Skills from './components/Skills.js';
import ProProjects from './components/ProProjects.js';

function App() {

    const headerRef = useRef<HTMLDivElement | null>(null); // Corrected type here
    const introductionRef = useRef<HTMLDivElement | null>(null); // Corrected type here
    const skillsRef = useRef<HTMLDivElement | null>(null); // Corrected type here
    const proProjects = useRef<HTMLDivElement | null>(null); // Corrected type here

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
                ref:  proProjects,
                text: "Projects"
            },
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
            <BaseContainer containerContent={<ProProjects/>} sectionName='proProjects' ref={proProjects}/>
            {/* Skills - layout animations? */}
            {/* Projects - layout animations? */}
            {/* Footer */}
        </div>
    );
}

export default App;
