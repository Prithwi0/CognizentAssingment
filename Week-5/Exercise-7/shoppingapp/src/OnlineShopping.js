import React from "react";
import Cart from "./Cart";

class CartItem {
  constructor(ItemName, Price) {
    this.ItemName = ItemName;
    this.Price = Price;
  }
}

export class OnlineShopping extends React.Component {
  render() {
    const cartItems = [
      new CartItem("Laptop", 800000),
      new CartItem("TV", 220000),
      new CartItem("Washing Machine", 100000),
      new CartItem("Mobile", 900000),
      new CartItem("Fridge", 410000),
    ];

    return (
      <div>
        <h1>Items Ordered:</h1>
        {cartItems.map((item, index) => (
          <Cart key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
