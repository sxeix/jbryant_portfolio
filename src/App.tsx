import HeaderContainer from './components/HeaderContainer.jsx';
import Introduction from './components/Introduction.js';

function App() {
    // add motion scroll here
    return (
        <div className="page">
            {/* Overarching stagger buttons - see motion */}
            <HeaderContainer />
            <Introduction />
            {/* Skills - layout animations? */}
            {/* Projects - layout animations? */}
            {/* Footer */}
        </div>
    );
}

export default App;
