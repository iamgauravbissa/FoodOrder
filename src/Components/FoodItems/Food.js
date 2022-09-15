import React from "react";
import Card from "./Card";
import FoodImage from "../../Asset/HeroImg.jpg";
const Food = props =>{
    return <React.Fragment>
        <Card>
            <div className="bg-slate-200 text-black p-1 m-2 flex justify-center align-middle rounded-md border-4 border-black ">
            <div className="flex flex-col p-5 m-2">
            <h1>{props.foodName}</h1>
            <p>Food Item Descriptoin</p>
            <span>{`Price $ ${props.price}`}</span>
            <button className='rounded hover:rounded-lg hover:bg-black hover:text-white w-1/2'>🛒 Add</button>
            </div>
            <div className='w-1/3'>
                <img src={FoodImage} alt='food'></img>
            </div>
            </div>
        </Card>
    </React.Fragment>
}

export default Food;