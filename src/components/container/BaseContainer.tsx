import "./BaseContainer.css";

interface ContainerContentProps {
    containerContent: React.ReactNode
}

function BaseContainer(props: ContainerContentProps) {
    return (
        <div className="base__container">
            {props.containerContent}
        </div>
    );
}

export default BaseContainer;
