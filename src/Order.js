import React, { useState } from "react";

const Order = props => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(preOrders => preOrders + 1);
  };

  return (
    <li>
      {props.orderType}: {orders}{" "}
      <button onClick={orderOne} className="btn btn-primary">
        Add
      </button>
    </li>
  );
};

export default Order;
