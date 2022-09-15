import React, { Fragment } from "react";
import FoodHeading from "./FoodHeader";

const HeroImage = (props) => {
  return (
    <Fragment>
      <div className="bg-hero-pattern flex justify-center bg-cover min-h-1/2">
        <div className="bg-slate flex min-h-1/2 w-1/2 justify-center items-center flex-col">
          <div className='bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 p-10 rounded-lg bg-opacity-2'>
            <FoodHeading></FoodHeading>
          </div>
        </div>
      </div>{" "}
    </Fragment>
  );
};

export default HeroImage;
