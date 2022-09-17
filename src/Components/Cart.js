import React from "react";
import cancelIcon from "../Asset/cross.png";
import Food from "./FoodItems/Food";

const Cart = (props) => {
  return (
    <div className="bg-slate-800 transition ease-in-out delay-150 flex justify-center items-center w-screen h-screen fixed overflow-hidden z-10">
      <div className="w-1/2 h-1/2 bg-white">
        <div className="pl-3 pr-2 pt-2 pb-2 flex grow-0 justify-between items-center bg-black text-white">
          <h1>Cart Items !</h1>
          <span className="hover:scale-125 hover:">
            <button onClick={()=>{props.setShowDialog(!props.showDialog)}}>
              {" "}
              <img
                src={cancelIcon}
                alt="cancel"
                width="25px"
                height="25px"
              ></img>
            </button>
          </span>
        </div>
        <div className="flex flex-row overflow-auto">
          <Food foodName = 'Pizza' viaCart = {true}></Food>
          <Food foodName = 'Pizza' viaCart = {true}></Food>
          <Food foodName = 'Pizza' viaCart = {true}></Food>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={()=> {props.setShowDialog(!props.showDialog)}} className="bg-black p-2 m-1 hover:scale-125 ease-in duration-550 text-white hover:bg-slate-800">
            Close
          </button>
          <button onClick={() => {alert("Ordering")}} className="bg-black p-2 m-1 hover:scale-125 ease-in duration-550 text-white hover:bg-slate-800">
            Order
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
