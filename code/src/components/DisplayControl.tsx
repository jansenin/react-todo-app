import React from "react";

const DisplayControl: React.FC<{ display: boolean }> = props => {
    return (
        <div
            style={{
                display: props.display ? "block" : "none"
            }}
        >
            {props.children}
        </div>
    );
};

export default DisplayControl;
