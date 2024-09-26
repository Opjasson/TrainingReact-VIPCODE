import React from "react";
import Form from "../Elements/Input/Form";
import Button from "../Elements/Button/Button";
function Formlogin() {
    const handleClick = (event) => {
        event.preventDefault()
        localStorage.setItem('username', event.target.username.value)
        localStorage.setItem('password', event.target.password.value)
        window.location.href = "/product"
        
    };


    return (
        <div>
            <form onSubmit={handleClick}>
                <Form
                    label="username"
                    name="username"
                    children="username"
                    type="text"
                    placeholder="Masukan username"
                />
                <Form
                    name="password"
                    children="password"
                    type="password"
                    placeholder="******"
                />
                <Button variant="bg-blue-700" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Formlogin;
