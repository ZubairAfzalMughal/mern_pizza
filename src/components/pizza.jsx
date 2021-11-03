import React, { useState } from "react";
import store from "store";
const Pizza = ({ pizza, handleModel }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [cartList, setCartList] = useState([]);
  const addCartItems = (p, q, v) => {
    const cartItem = {
      id: p.id,
      name: p.name,
      image: p.image,
      prices: p.prices,
      quantity_: q,
      price: p.prices[0][v] * q,
      varient_: v,
    };

    const cartItems = [cartItem, ...cartList];
    setCartList(cartItems);
    console.log(cartList);
    store.set("cart", cartList);
  };

  const styles = {
    h1Style: {
      fontWeight: "bold",
    },
    containerStyle: {
      margin: 30,
    },
  };
  return (
    <div
      style={styles.containerStyle}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <h4 style={styles.h1Style}>{pizza.name}</h4>
      <img
        className="img-fluid"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => handleModel(pizza)}
        src={pizza.image}
        style={{ height: 200, width: 250 }}
      />

      <div className="d-flex justify-content-around">
        <div style={{ fontWeight: "bold" }}>variant</div>
        <div style={{ fontWeight: "bold" }}>quantity</div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="w-100 m-1">
          <select
            value={varient}
            className="form-control"
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((v) => {
              return (
                <option key={v} value={v}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <select
            value={quantity}
            className="form-control"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((index, price) => {
              return (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {/* Setting Price and button */}
      <div className="d-flex justify-content-around">
        <div className="m-1 w-100">
          <p style={{ fontWeight: "bolder", marginTop: "4%" }}>
            Price: Rs{pizza.prices[0][varient] * quantity}/_
          </p>
        </div>
        <div className="m-1 w-100">
          <button
            className="btn btn-danger"
            onClick={() => addCartItems(pizza, quantity, varient)}
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
