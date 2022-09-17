import React , {Fragment, useState} from 'react';
import CardPopup from './CardPopup';
import Cart from './Cart';
const Navigation = props =>{

   const[showDialog,setShowDialog] = useState(false);
    const openDialog = () => {
        setShowDialog(!showDialog)
    }

    const dialog = showDialog ? <Cart showDialog={showDialog} setShowDialog = {setShowDialog}></Cart> : null;
return <Fragment>
    {dialog}
    <nav className='flex justify-between bg-black p-2'>
        <div className='text-white text-2xl font-semibold tracking-wide'><h2>Food Order</h2></div>
        <div><button className='p-2 mr-2 bg-white' onClick={() => {setShowDialog(!showDialog)}}>Your Cart 🛒</button></div>
    </nav>
</Fragment>
}

export default Navigation;