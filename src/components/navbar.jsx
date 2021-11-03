import React, { useEffect, useState } from "react";
const NavBar = () => {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    setCartList(cart);
    console.log(cart);
  }, []);
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <a className="navbar-brand" href="#">
        Dr.Pizza
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Card {cartList.length}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
