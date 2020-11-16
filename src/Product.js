import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating }) {

  const [state, dispatch] = useStateValue();
  console.log('state :>> ', state);
  const addToBasket = () => {
    // Dispatch the item into the data leyer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <div className="product">
      <div
        className="product__info"
      >
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div
          className="product__rating">
          {Array(rating).fill().map((_, idx) => {
            <p> 🔫  📨  </p>
          })}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
