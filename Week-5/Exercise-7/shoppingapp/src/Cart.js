import React from "react";

class Cart extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        <p>
          <strong>Item Name:</strong> {item.ItemName}
        </p>
        <p>
          <strong>Price:</strong> {item.Price}
        </p>
      </div>
    );
  }
}

export default Cart;
