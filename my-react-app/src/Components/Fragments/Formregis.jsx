import React from "react";
import Form from "../Elements/Input/Form";
import Button from "../Elements/Button/Button";

function Formregis() {
    return (
        <div>
            <Form
                label="email"
                children="email"
                type="email"
                placeholder="Email@gmail.com"
            />
            <Form
                label="username"
                children="username"
                type="text"
                placeholder="Masukan username"></Form>
            <Form
                label="password"
                children="password"
                type="password"
                placeholder="******"></Form>
            <Button variant="bg-blue-700">Login</Button>
        </div>
    );
}

export default Formregis;
