import "./HeaderContainer.css";

function HeaderContainer() {
    return (
        <div className="header__container">
            <div className="header__text">
                <h1 className="header__intro">
                    Hi, I&apos;m <span className="header__name"> James Bryant</span>
                </h1>
                <h2 className="header__desc">Software Developer</h2>
            </div>
            <div className="header__image">
                {/* TODO: put image of myself here */}
                <div className="temporary"></div>
            </div>
        </div>
    );
}

export default HeaderContainer;
