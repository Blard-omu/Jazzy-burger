import React, { useContext } from "react";
import { UtilsContext } from "../contexts/UtilsContext";
import ImgGallery from "./ImgGallery"
import { FaCheck } from "react-icons/fa"


const Card = ({ product }) => {
  const { handleIncrease, handleReduce, toCartButton } =
    useContext(UtilsContext);

  const handleIncreaseClick = () => {
    handleIncrease(product.id);
  };

  const handleReduceClick = () => {
    handleReduce(product.id);
  };

  const handleCartButtonClick = () => {
    toCartButton(product.id);
  };

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="cart-title">{product.title}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex-column">
            <p class="price">Total Price</p>
            <p className="price-tag">&#8358;{product.price}.00</p>
          </div>

          <div className="counter">
            <button onClick={handleReduceClick}>-</button>
            <label htmlFor="">{product.count}</label>
            <button onClick={handleIncreaseClick}>+</button>
          </div>
          
          
        </div>
        <div className="gallery">
            <ImgGallery/>
          </div>
        <div className="">
          <button className="cart-btn cart-txt" onClick={handleCartButtonClick}>
            <div className="cart-icon">< FaCheck/></div>
              {product.cart ? "Update Cart" : "Add to Cart"}
            </button>
          </div>


      </div>
    </div>
  );
};

export default Card;
