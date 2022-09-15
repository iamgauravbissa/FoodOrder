import React , {Fragment} from 'react';
const Navigation = props =>{
return <Fragment>
    <nav className='flex justify-between bg-black p-2'>
        <div className='text-white text-2xl font-semibold tracking-wide'><h2>Food Order</h2></div>
        <div><button className='p-2 mr-2 bg-white'>Your Cart 🛒</button></div>
    </nav>
</Fragment>
}

export default Navigation;