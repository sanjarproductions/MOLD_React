import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { instance } from '../../api/axios';
import { useState } from 'react';
import { Container } from '../../utils/Utils';
import { v4 as uuidv4 } from 'uuid';
import "./ProductAbout.scss"
import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from 'react-redux';

const ProductAbout = () => {
  const dispatch = useDispatch()
  const [selectVariant, setSelectVariant] = useState(0)
  const [itemCounter, setItemCounter] = useState(0)
  const [activeImage, setactiveImage] = useState(0)
  const [productData, setProductData] = useState(null)

  let productDataUrl = useParams();

  useEffect(() => {
    instance(`/product/single-product/${productDataUrl.id}`)
      .then(response => { setProductData(response.data?.singleProduct[0]) })
      .catch(err => console.log(err))
  }, [productDataUrl.id])
  console.log(productData)

  function plusProduct() {
    if (+productData?.singleProduct[0].productSizesAndQuantity?.[selectVariant].quantity > itemCounter) {
      setItemCounter(itemCounter + 1)
    }
    // if (productData?.productSizesAndQuantity[selectVariant].quantity > itemCounter) {
    //   setItemCounter(itemCounter + 1)
    // }
  }

  function minusProduct() {
    if (itemCounter > 1) {
      setItemCounter(itemCounter - 1)
    }
  }

  function addToCard(addProduct) {
    const {productSizesAndQuantity, ...rest} = addProduct
    rest.selectedType = productSizesAndQuantity[selectVariant]
    rest.count = itemCounter
    rest.totalPrice = 
      productData?.productSizesAndQuantity?.[selectVariant].price * itemCounter
    dispatch({item : rest, type: "@ADD_TO_CARD"})
  }

  return (
    <div>
      <Container>
        <>
          <div className="product-about__flex">
            <div className="product-images__wrapper">
              <img src={productData?.productImages[activeImage]} alt="" className='main-product__photo' />
              <div width={700} hight={700} className="images-little_wrapper">
                {
                  productData?.productImages.map((smallImage, i) =>
                    <img className='product__about-more' style={i === activeImage ? { border: "1px solid #000" } : { border: "none" }} src={smallImage} onClick={() => setactiveImage(i)} />
                  )
                }
              </div>
            </div>
            <div className="product-text__wrapper">
              <h1 key={uuidv4()}>{productData?.productName_ru}</h1>
              <div className="category-box" key={uuidv4()} >
                <span key={uuidv4()}>{productData?.productMainCategory_ru}</span>
                <FiChevronRight />
                <span key={uuidv4()}>{productData?.productSubCategory_ru}</span>
              </div>
              <div className='basic__flex'>
                <p className='product__quantity'>На складе: {productData?.productSizesAndQuantity[0].quantity}</p>
                <div className='basic__flex'>
                  <p className='product__amount'>Размер:</p>
                  <select name="" id="" onChange={(e) => {
                    setSelectVariant(+e.target.value)

                    setItemCounter(1)
                  }}>
                    {
                      productData?.productSizesAndQuantity?.map((q, ind) =>
                        <option value={ind} >{q.size}</option>
                      )
                    }
                  </select>
                </div>

              </div>
              <p className='main__price'>{productData?.productSizesAndQuantity[0].price} CУМ</p>
              <div className='product__description-p'>
                {
                  productData?.productDescription_ru.map(desc =>
                    <p>{desc}</p>
                  )
                }
              </div>
              <div className="counter basic__flex">
                <div>
                  <button onClick={plusProduct}>+</button>
                  <span>{itemCounter}</span>
                  <button onClick={minusProduct}>-</button>
                </div>
                <p>{itemCounter * +productData?.productSizesAndQuantity?.[selectVariant]?.price}</p>
              </div>
              <button onClick={() => addToCard(productData)}>Add to Card</button>
            </div>
          </div>

        </>
      </Container>
    </div>
  )
}

export default ProductAbout