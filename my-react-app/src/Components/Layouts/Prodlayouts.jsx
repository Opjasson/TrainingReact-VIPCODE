import React from "react";
import Button from "../Elements/Button/Button";

function Prodlayouts(props) {
    const { children } = props
    return (
        <div>
            <div className="w-80 p-5 rounded mt-10 m-auto bg-pink-400 border shadow-md">
                { children }
            </div>
        </div>
    );
}

function Head(props) {
    const { src } = props
    return (
        <div>
            <img src={src} alt="" />
        </div>
    );
}

function Body(props) {
    const { detail } = props
    return (
        <div className="text-white text-base">
            <p>
                {detail}
            </p>
        </div>
    );
}

function Bottom(props) {
    const { idr, addToCart, id } = props
    return (
        <div className="flex justify-between border mt-4 items-center">
            <span className="text-xl font-bold">{idr}</span>
            <Button variant="bg-green-400 hover:bg-green-600" onClick={() => addToCart(id)}> Buy </Button>
        </div>
    );
}

Prodlayouts.Header = Head;
Prodlayouts.Bodyer = Body;
Prodlayouts.Bottomer = Bottom;

export default Prodlayouts;
