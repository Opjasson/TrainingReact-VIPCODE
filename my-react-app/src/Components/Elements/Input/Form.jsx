import React from "react";
import Label from "./Label";
import Input from "./Input";

function Form(props) {
    const { label, name, children, type, placeholder } = props;
    return (
        <div>
            <Label htmlFor={label}>{children}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </div>
    );
}

export default Form;
