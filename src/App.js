import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const {books} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (book) => {
    const exist = cartItems.find(x => x.id === book.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === book.id ? {...exist, qty: exist.qty +1} : x));
    }
    else {
      setCartItems([...cartItems, {...book, qty: 1}]);
    }
  };

  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Basket cartItems={cartItems} onAdd={onAdd} ></Basket>
      </div>
      <div className='row'>
        <Main books={books} onAdd={onAdd}></Main>
      </div>
    </div>
  );
}

export default App;
