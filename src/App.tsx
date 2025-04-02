import BaseContainer from './components/container/BaseContainer.js';
import HeaderContainer from './components/HeaderContainer.jsx';
import Introduction from './components/Introduction.js';
import Projects from './components/ProProjects.js';
import Skills from './components/Skills.js';

function App() {
    // add motion scroll here
    return (
        <div className="page">
            {/* Overarching stagger buttons - see motion */}
            <BaseContainer containerContent={<HeaderContainer/>} />
            <BaseContainer containerContent={<Introduction/>} />
            <BaseContainer containerContent={<Skills/>} />
            <BaseContainer containerContent={<Projects/>} />
            {/* Skills - layout animations? */}
            {/* Projects - layout animations? */}
            {/* Footer */}
        </div>
    );
}

export default App;
