import React from 'react'

export default function Book(props) {
    const {book, onAdd} = props;
  return (
    <div>
        <div>
            <img className='small' src={book.image} alt={book.title}/>
        </div>
        <div>
            <h3>{book.title}</h3>
        </div>
        <div>
            <h3>${book.price}</h3>
        </div>
        <div>
            <button onClick={() => onAdd(book)}>add to cart</button>
        </div>
    </div>

  )
}
