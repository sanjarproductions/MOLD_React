import React from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';
import ProductAbout from "../../routes/product_about/ProductAbout"

const ProductCard = ({ productData }) => {
  console.log(productData);

  return (
    <div className='product-card'>
      <img src={productData.productImages[0]} alt="" />
      <h3>{productData.productName_uz}</h3>
      <p>{productData.productMainCategory_ru}</p>
      <p>{productData.productSubCategory_ru}</p>
      <p>{productData.productSizesAndQuantity[0].price}sum</p> <p>{productData.productSizesAndQuantity.length.price}sum</p>
      <Link text="Саватга қўшиш" to={ProductAbout} >Hello</Link>
    </div>
  )
}

export default ProductCard