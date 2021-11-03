import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/navbar';
import Pizza from './components/pizza';
import CustomModel from './components/custom_model';
import LoadingSpin from './widget/loading_spin';
function App() {
  useEffect(() => {
    getPizzas();
  }, []);
  const cartHandle = (pizza, quantity, varient) => {
    let loadCart = JSON.parse(localStorage.getItem('cart'));
    const cartItem = {
      id: pizza.id,
      name: pizza.name,
      image: pizza.image,
      prices: pizza.prices,
      quantity: quantity,
      price: pizza.prices[0][varient] * quantity,
      varient: varient,
    };
    const cartItemsList = [cartItem, ...loadCart];
    setCartList(cartItemsList);
    console.log(cartList);
    localStorage.setItem('cart', JSON.stringify(cartList));
  }
  const getPizzas = () => {
    setLoading(true);
    axios.get('http://localhost:5000/api/getPizzas')
      .then((response) => {
        setPizzas(response.data.pizzas)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      })
  }
  const [isLoading, setLoading] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [mPizza, setPizza] = useState({
    title: '',
    description: '',
    imgUrl: ''
  });
  const handleModel = (p) => {
    let temPizza = { ...mPizza };
    const index = pizzas.indexOf(p);
    console.log(index);
    temPizza.title = pizzas[index].name;
    temPizza.description = pizzas[index].description;
    temPizza.imgUrl = pizzas[index].image;
    console.log(temPizza);
    setPizza(temPizza);
  }
  return (
    <div className="App">
      <NavBar />
      {isLoading && <LoadingSpin />}
      <div className="row text-center">
        {pizzas.map((pizza, i) => {
          return <div key={i} className="col-md-4">
            <Pizza pizza={pizza} handleModel={handleModel} addCartHandle={cartHandle} />
          </div>
        })}
      </div>
      <CustomModel
        title={mPizza.title}
        description={mPizza.description}
        imgUrl={mPizza.imgUrl}
      />
    </div>
  );
}

export default App;
