interface SectionProp {
    ref: React.RefObject<HTMLElement | null>;
    text: string
}

interface NavProps {
    sections: SectionProp[]
}

export default NavProps;