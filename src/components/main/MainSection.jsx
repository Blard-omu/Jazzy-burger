import React from 'react';
import Card from '../Card'
import background1 from '../../assets/background/image 4.png';

const MainSection = ({ products }) => {
  return (
    <>
    <main className="main-section">
      <div className="hero-section">
        <img src={background1} alt="backgroung-img" className="img-fluid" />
      </div>
      <div className="card-con">
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </main>
    </>
  );
};

export default MainSection;
