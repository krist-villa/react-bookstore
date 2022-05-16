import React from 'react';
export default function Header(props){
    const {cartItems} = props;
    return (
        <aside className='block col-1'>
            <h2>Your Cart</h2>
            <br></br>
            <div>
                {cartItems.length===0 && <h2>nothing in here...</h2>}
                <img className='cart-empty' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocqOPUkhOj2bI6HJMm2IJc8WVs70nXsB7XwTc_-qgj60It-mqlowYIVvRSiTx7ljrrIA&usqp=CAU'/>
            </div>
        </aside>

    ); 
}