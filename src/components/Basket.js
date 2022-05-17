import React from 'react';

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    
    return (
        <aside className='block col-1'>
            <h2>Your Cart</h2>
            <div>
                {cartItems.length === 0 && <img className='cart-empty row' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocqOPUkhOj2bI6HJMm2IJc8WVs70nXsB7XwTc_-qgj60It-mqlowYIVvRSiTx7ljrrIA&usqp=CAU' alt='cart is empty'/> }
            </div>

            <div>
                {cartItems.map((item) => (
                <div key={item.id}>
                    <div className='col-2'>
                        {item.name}
                    </div>
                    <div className='col-2'>
                        <table className='cart-table'>
                            <th><p className='cart-title'>{item.title}</p></th>
                            <tr><p className='cart-item-details'>Quantity: {item.qty}</p></tr>
                            <tr><p className='cart-item-details'>${item.price}</p></tr>
                            <td><button className='add-remove' onClick={()=>onAdd(item)}><p>+</p></button>
                                <button className='add-remove' onClick={()=>onRemove(item)}><p>-</p></button>
                            </td>
                        </table>
                        
                    </div>
                </div>
            ))}
            </div>
        </aside>

    ); 
}