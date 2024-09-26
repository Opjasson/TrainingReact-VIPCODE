import React from "react";

function Input(props) {
    const { type, placeholder, name } = props;
    return (
        <div>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className="block w-full px-3 border"
            />
        </div>
    );
}

export default Input;
