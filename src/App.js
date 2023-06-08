import React, { useState } from 'react';
import './index.css'
import data from './ProductStore';
import MainSection from './components/main/MainSection';

function App() {
  const [products, setProducts] = useState(data);

  return (
      <div className="App">
        <MainSection products={products}/>
      </div>
  );
}

export default App;
