import Navigation from "./Navigation";
import HeroImage from "./HeroImage";
import React from "react";

const Header = props =>{
    return <React.Fragment>
 <Navigation></Navigation>
 <HeroImage></HeroImage>
 </React.Fragment>
}
export default Header;