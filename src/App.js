import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  const {books} = data;
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main books={books}></Main>
        <Basket cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;
