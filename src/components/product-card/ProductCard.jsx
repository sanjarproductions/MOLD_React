import React from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ProductCard = ({ productData }) => {
  const currentLang = useSelector(state => state.language.lang)
  console.log(currentLang)
  // console.log(productData);
  return (
    <div className='product-card'>
      <Link text="Саватга қўшиш" to={`/productabout/${productData._id}`} >
        <img src={productData.productImages[0]} alt="" />
      </Link>
      {/* <h3>{productData.productName_uz}</h3> */}
      <h3>{currentLang === "uz" ? productData.productName_uz : productData.productName_uz}</h3>
      <div className="card__flex">
        <p className='main-category__slider'>{currentLang === "uz" ? productData.productMainCategory_uz : productData.productMainCategory_ru}</p>
        <p className='sub-category__slider'>{currentLang === "uz" ? productData.productSubCategory_uz :  productData.productSubCategory_ru}</p>
      </div>
      <p className='price__slider'>
        {`${productData?.productSizesAndQuantity[0].price} 
          ${productData?.productSizesAndQuantity.length > 1 ? "- " + productData?.productSizesAndQuantity
          [productData?.productSizesAndQuantity.length - 1].price : ""}`} </p>
      <DefaultButton text="Выбор"></DefaultButton>
    </div>
  )
}

export default ProductCard