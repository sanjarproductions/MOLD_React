import React from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';
const ProductCard = ({ productData }) => {
  // console.log(productData);
  return (
    <div className='product-card'>
      <Link text="Саватга қўшиш" to={`/productabout/${productData._id}`} ><img src={productData.productImages[0]} alt="" /></Link>
      <h3>{productData.productName_uz}</h3>
      <div className="card__flex">
        <p className='main-category__slider'>{productData.productMainCategory_ru}</p>
        <p className='sub-category__slider'>{productData.productSubCategory_ru}</p>
      </div>
      <p className='price__slider'>
        {`${productData?.productSizesAndQuantity[0].price} 
          ${productData?.productSizesAndQuantity.length > 1 ? "- " +  productData?.productSizesAndQuantity
          [productData?.productSizesAndQuantity.length -1].price : ""}`} </p>
      <DefaultButton text="Выбор"></DefaultButton>
    </div>
  )
}

export default ProductCard