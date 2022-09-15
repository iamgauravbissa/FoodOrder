import "./App.css";
import FoodItem from "./Components/FoodItems/FoodItem";
import Header from "./Components/Header";
import React, { Fragment } from "react";
import Footer from "./Components/Footer";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <FoodItem></FoodItem>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
