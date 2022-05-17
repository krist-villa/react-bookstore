import React from 'react';
import Book from './Book';

export default function Main(props){
    const {books, onAdd} = props;
    return <main className='block col-2'>
        <h2>Books Available</h2>
        <div className='row'>
            {books.map((book) => (
                <Book key={book.id} book={book} onAdd={onAdd}></Book>
            ))}
        </div>
    </main>
}