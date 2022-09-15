import React, { Fragment } from "react";

const FoodHeading = (props) => {
  return (
    <Fragment>
      <div>
        <h1 className ='text-2xl font-serif'> I m the best food order app</h1>
        <p className='p-2 m-1'>
          Hello, We are leading food delivery app in your area,
          Give us a try and order from our delicious menu.
        </p>
        <button className="p-1 m-2 rounded bg-white hover:bg-black hover:text-white">Contact Us</button>
      </div>
    </Fragment>
  );
};

export default FoodHeading;
