import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { instance } from '../../api/axios';
import { useState } from 'react';
import { Container } from '../../utils/Utils';
import { v4 as uuidv4 } from 'uuid';
import "./ProductAbout.scss"
import { FiChevronRight } from "react-icons/fi";

const ProductAbout = () => {

  const [productData, setProductData] = useState([])

  let productDataUrl = useParams();
  console.log(productDataUrl.id);

  useEffect(() => {
    instance(`/product/single-product/${productDataUrl.id}`)
      .then(response => {
        setProductData(response.data)
        console.log(response.data)
      })
      .catch(err => console.log(err))

  }, [productDataUrl.id])


  return (
    <div>
      <Container>
        {
          productData.singleProduct?.map(product => {
            return (
              <>
                <div className="product-about__flex">
                  <div className="product-images__wrapper">
                    <img src={product.productImages[0]} alt="" className='main-product__photo' />
                    <div className="images-little_wrapper">
                      <img src={product.productImages[0]} alt="" />
                    </div>
                  </div>
                  <div className="product-text__wrapper">
                    <h1 key={uuidv4()}>{product.productName_ru}</h1>
                    <div className="category-box" key={uuidv4()} >
                      <span key={uuidv4()}>{product.productMainCategory_ru}</span>
                      <FiChevronRight />
                      <span key={uuidv4()}>{product.productSubCategory_ru}</span>
                    </div>
                    <div className='basic__flex'>
                      <p className='product__quantity'>На складе: {product.productSizesAndQuantity[0].quantity}</p>
                      <div className='basic__flex'>
                        <p className='product__amount'>Размер:</p>
                        <select name="" id="">
                          <option value={product.productSizesAndQuantity[0].size}> {product.productSizesAndQuantity[0].size}</option>
                        </select>
                      </div>

                    </div>

                    <p className='main__price'>{product.productSizesAndQuantity[0].price} CУМ</p>
                    <div className='product__description-p'>
                      <p>{product.productDescription_ru[0]}</p>
                      <p>{product.productDescription_ru[1]}</p>
                      <p>{product.productDescription_ru[2]}</p>
                    </div>

                    <div className="counter">

                    </div>
                  </div>
                </div>

              </>
            )
          })
        }
      </Container>
    </div>
  )
}

export default ProductAbout
