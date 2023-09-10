// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { instance } from "../../api/axios";
// import ProductCard from "../../components/product-card/ProductCard";
// import "./Subcategory.scss"

// const MainCategory = () => {
//   const { categoryname } = useParams();
//   const [subcategories, setSubCategories] = useState(null);

//   useEffect(() => {
//     let isDataFetched = true;
//     instance(`/category/subcategories/${categoryname}`)
//       .then((response) => {
//         if (isDataFetched) {
//           setSubCategories(response.data);
//         }
//       })
//       .catch((err) => setSubCategories(err));

//     return () => {
//       isDataFetched = false;
//     };
//   }, [categoryname]);

// console.log(subcategories);

//   return (
//     <div className="container">
//       <div className="category__wrapper">
//         {subcategories?.subCategory?.length > 0 ? (
//           <>
//             <h2>{subcategories?.subcategoryTranslate?.uz}</h2>
//             <div className="category__box">
//               {subcategories?.subcategory?.map((categoryItem) => (
//                 <ProductCard key={categoryItem.id} productData={categoryItem} />
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="loading">
//             <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainCategory;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../api/axios";
import ProductCard from "../../components/product-card/ProductCard";
import "./Subcategory.scss";

const Subcategory = () => {
  const { categoryname } = useParams();
  const [subcategories, setSubcategories] = useState(null);

  useEffect(() => {
    let isDataFetched = true;
    instance
      .get(`/category/subcategories/${categoryname}`)
      .then((response) => {
        if (isDataFetched) {
          setSubcategories(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setSubcategories(null);
      });

    return () => {
      isDataFetched = false;
    };
  }, [categoryname]);

  console.log(subcategories);

  return (
    <div className="container">
      <div className="category__wrapper">
        {subcategories?.subCategory?.length > 0 ? (
          <>
            <h2>{subcategories?.subcategoryTranslate?.uz}</h2>
            <div className="category__box">
              {subcategories?.subCategory.map((categoryItem) => (
                <ProductCard key={categoryItem.id} productData={categoryItem} />
              ))}
            </div>
          </>
        ) : (
          <div className="loading">
            <i className="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subcategory;