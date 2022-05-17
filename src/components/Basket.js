import React from 'react';

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    return (
        <aside className='block col-1'>
            <h2>Your Cart</h2>
            <div>
                {cartItems.length === 0 && <img className='cart-empty' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocqOPUkhOj2bI6HJMm2IJc8WVs70nXsB7XwTc_-qgj60It-mqlowYIVvRSiTx7ljrrIA&usqp=CAU' alt='cart is empty'/> }
                {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-2'>
                        {item.name}
                    </div>
                    <div className='col-2'>
                        <button onClick={()=>onAdd(item)} className="add">+</button>
                        <button onClick={()=>onRemove(item)} className="add">-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            </div>
            
        </aside>

    ); 
}