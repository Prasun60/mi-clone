import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/productReviews.css"

function ProductReviews({productReviews}) {
  return (
    <div className='ProductReviews'>
        {productReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} index={index} review={item.review} key={item.image} />
        ))}
    </div>
  )
}

export default ProductReviews