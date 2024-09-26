import React, { Fragment, useEffect, useState } from "react";
import Prodlayouts from "../Components/Layouts/Prodlayouts";
import Button from "../Components/Elements/Button/Button";

const dataProduct = [
    {
        id: 1,
        image: "./img/cake-1.jpg",
        isi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil voluptas tempore mollitia aliquid laborum!",
        idr: 15.0,
    },
    {
        id: 2,
        image: "./img/cake-2.jpg",
        isi: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil voluptas tempore mollitia aliquid laborum!",
        idr: 25.0,
    },
];

const username = localStorage.getItem("username");
const logoutClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "/login";
};

// set cart
const Product = () => {
    // use state
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Cake enak",
            qty: 1,
        },
    ]);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    // ComponenDidUpdate
    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = dataProduct.find(
                    (productItem) => productItem.id === item.id
                );
                return acc + product.idr * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([...cart, { id, qty: 1 }]);
        }
    };

    return (
        <Fragment>
            <nav className="flex justify-end h-10 items-center px-10 bg-blue-600">
                {username}
                <Button variant="bg-red-500 ml-3" onClick={logoutClick}>
                    LogOut
                </Button>
            </nav>
            <div className="flex flex-wrap bg-slate-400 ">
                <div className="w-3/4 flex flex-wrap gap-5 border ">
                    {dataProduct.map((product) => {
                        return (
                            <Prodlayouts key={product.id}>
                                <Prodlayouts.Header src={product.image} />
                                <Prodlayouts.Bodyer
                                    detail={product.isi}></Prodlayouts.Bodyer>
                                <Prodlayouts.Bottomer
                                    id={product.id}
                                    idr={product.idr.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                    addToCart={
                                        addToCart
                                    }></Prodlayouts.Bottomer>
                            </Prodlayouts>
                        );
                    })}
                </div>
                <div className="border-white w-1/4">
                    <h1>cart</h1>

                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = dataProduct.find(
                                    (product) => product.id === item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            {product.idr.toLocaleString(
                                                "id-ID",
                                                {
                                                    style: "currency",
                                                    currency: "IDR",
                                                }
                                            )}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            {(
                                                item.qty * product.idr
                                            ).toLocaleString("id-ID", {
                                                style: "currency",
                                                currency: "IDR",
                                            })}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td colSpan={3}>Price</td>
                                <td>
                                    {totalPrice.toLocaleString("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default Product;
