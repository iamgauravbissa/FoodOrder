import React from "react";
import Food from "./Food";
const FoodItem = (props) => {
  return (
    <React.Fragment>
      <div className="bg-slate-400 flex justify-center items-center max-h-1/2 flex-col">
        <Food></Food>
        <Food></Food>
        <Food></Food>
        <Food></Food>
        <Food></Food>
        <Food></Food>
      </div>
    </React.Fragment>
  );
};

export default FoodItem;
