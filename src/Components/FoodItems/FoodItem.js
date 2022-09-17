import React from "react";
import Food from "./Food";

const FoodItemsList = [
  {id: 1, foodName: "Pizza", price: 200,},
  {id: 2, foodName: "Sandwich", price: 200,},
  {id: 3, foodName: "Momos", price: 200,},
  {id: 4, foodName: "Patties", price: 200,},
  {id: 5, foodName: "Cold Coffee", price: 200,},
  {id: 6, foodName: "Soft Drink", price: 200,},
  {id: 7, foodName: "French Fries", price: 200,},
];

const FoodProducts = FoodItemsList.map(
  (element)=>{
    return(
      <Food viaCart = {false} foodName = {element.foodName} price = {element.price}>
      </Food>
    )
  }
)
const FoodItem = (props) => {
  return (
    <React.Fragment>
      <div className="bg-slate-400 flex justify-center items-center max-h-1/2 flex-col">
      {FoodProducts}
      </div>
    </React.Fragment>
  );
};

export default FoodItem;
