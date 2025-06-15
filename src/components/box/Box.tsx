import React from "react";
import "./Box.css";

interface BoxProps {
    title: string;
    desc: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    padding?: string;
    color?: string;
    children?: React.ReactNode;
}

function Box(props: BoxProps) {
    const {
        title,
        desc,
        width = "200px",
        height = "200px",
        backgroundColor = "#ffffff",
        borderColor = "#84A4F5",
        borderWidth = "0.25em",
        borderRadius = "2em",
        padding = "15px",
        color = '#596175',
        children
    } = props;

    const boxStyle: React.CSSProperties = {
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        border: `${borderWidth} solid ${borderColor}`,
        borderRadius: borderRadius,
        padding: padding,
        color: color
    };

    return (
        <div className="box" style={boxStyle}>
            <h3 className="box-title">{title}</h3>
            <p className="box-description">{desc}</p>
            {children}
        </div>
    );
}

export default Box;