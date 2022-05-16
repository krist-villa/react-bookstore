import React from 'react'

export default function Book(props) {
    const {book} = props;
  return (
    <div>
        <table>
            <th>
                <img className='small' src={book.image} alt={book.title}></img>
            </th>
            <tr>
                <h3>{book.title}</h3>
            </tr>
            <tr>
                <h3>${book.price}</h3>
            </tr>
            <tr>
                <button><p>add to cart</p></button>
            </tr>
        </table>
    </div>
  )
}
