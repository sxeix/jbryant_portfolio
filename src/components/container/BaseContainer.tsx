import "./BaseContainer.css";

interface ContainerContentProps {
    containerContent: React.ReactNode,
    sectionName: string,
    ref: React.RefObject<HTMLDivElement | null>; // Corrected type here
}

function BaseContainer(props: ContainerContentProps) {
    return (
        <div id={props.sectionName} className="base__container" ref={props.ref}>
            {props.containerContent}
        </div>
    );
}

export default BaseContainer;
