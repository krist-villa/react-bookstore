import React from 'react';
export default function Header(props){
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Kristia's Bookstore</h1>
                </a>
            </div>
            <div>
                <a href="#/cart"><h2>Go to Cart</h2></a>
            </div>
        </header>
    );
}