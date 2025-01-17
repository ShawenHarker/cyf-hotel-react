import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Wine" />
        <Order orderType="Cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
