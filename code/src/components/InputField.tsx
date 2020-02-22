import React from "react";

export type onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => void;

export type InputFieldProps = {
    value: string;
    onChange: onInputChange;
    onKeyDown: onInputKeyDown;
};

const InputField: React.FC<InputFieldProps> = props => {
    return (
        <div className="input-field p20px">
            <input
                value={props.value}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
                className="uk-input"
            ></input>
        </div>
    );
};

export default InputField;
