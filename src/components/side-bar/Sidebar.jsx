import React from 'react'
import './Sidebar.scss'
import { instance } from '../../api/axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
const Sidebar = () => {
  const exceptions = ["/about", "/contact", "/maincategory"];
  const location = useLocation()

  const [categoryData, setCategoryData] = useState([])
  useEffect(() => {
    instance("/category/category-nest")
      .then(response => setCategoryData(response.data))
  }, [])


  return !exceptions.includes(location.pathname) ? (

    <div className='sidebar__main' style={{display:location.pathname.includes("/productabout")? "none" : "block"}}>
      <div className='header-side__bar'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="#4361EE">
          <path d="M3.95332 16.4445H12.4777C13.7955 16.4445 14.7838 16.107 15.4427 15.4321C16.1016 14.7572 16.431 13.7448 16.431 12.395V4.04937C16.431 2.69958 16.1016 1.68725 15.4427 1.01237C14.7838 0.337456 13.7955 0 12.4777 0H3.95332C2.63556 0 1.64724 0.337456 0.98836 1.01237C0.329453 1.68725 0 2.69958 0 4.04937V12.395C0 13.7448 0.329453 14.7572 0.98836 15.4321C1.64724 16.107 2.63556 16.4445 3.95332 16.4445ZM3.97806 13.3333C3.38503 13.3333 3.08852 13.0206 3.08852 12.395V4.0247C3.08852 3.41566 3.38503 3.11114 3.97806 3.11114H12.4283C13.0377 3.11114 13.3425 3.41566 13.3425 4.0247V12.395C13.3425 13.0206 13.0377 13.3333 12.4283 13.3333H3.97806ZM23.5223 16.4445H32.0467C33.3809 16.4445 34.3734 16.107 35.024 15.4321C35.6747 14.7572 36 13.7448 36 12.395V4.04937C36 2.69958 35.6747 1.68725 35.024 1.01237C34.3734 0.337456 33.3809 0 32.0467 0H23.5223C22.2045 0 21.2162 0.337456 20.5573 1.01237C19.8984 1.68725 19.569 2.69958 19.569 4.04937V12.395C19.569 13.7448 19.8984 14.7572 20.5573 15.4321C21.2162 16.107 22.2045 16.4445 23.5223 16.4445ZM23.5717 13.3333C22.9623 13.3333 22.6575 13.0206 22.6575 12.395V4.0247C22.6575 3.41566 22.9623 3.11114 23.5717 3.11114H32.022C32.615 3.11114 32.9115 3.41566 32.9115 4.0247V12.395C32.9115 13.0206 32.615 13.3333 32.022 13.3333H23.5717ZM3.95332 36H12.4777C13.7955 36 14.7838 35.6667 15.4427 35C16.1016 34.3333 16.431 33.3169 16.431 31.9506V23.6049C16.431 22.2551 16.1016 21.2469 15.4427 20.5803C14.7838 19.9136 13.7955 19.5802 12.4777 19.5802H3.95332C2.63556 19.5802 1.64724 19.9136 0.98836 20.5803C0.329453 21.2469 0 22.2551 0 23.6049V31.9506C0 33.3169 0.329453 34.3333 0.98836 35C1.64724 35.6667 2.63556 36 3.95332 36ZM3.97806 32.8889C3.38503 32.8889 3.08852 32.5844 3.08852 31.9753V23.6049C3.08852 22.9794 3.38503 22.6666 3.97806 22.6666H12.4283C13.0377 22.6666 13.3425 22.9794 13.3425 23.6049V31.9753C13.3425 32.5844 13.0377 32.8889 12.4283 32.8889H3.97806ZM23.5223 36H32.0467C33.3809 36 34.3734 35.6667 35.024 35C35.6747 34.3333 36 33.3169 36 31.9506V23.6049C36 22.2551 35.6747 21.2469 35.024 20.5803C34.3734 19.9136 33.3809 19.5802 32.0467 19.5802H23.5223C22.2045 19.5802 21.2162 19.9136 20.5573 20.5803C19.8984 21.2469 19.569 22.2551 19.569 23.6049V31.9506C19.569 33.3169 19.8984 34.3333 20.5573 35C21.2162 35.6667 22.2045 36 23.5223 36ZM23.5717 32.8889C22.9623 32.8889 22.6575 32.5844 22.6575 31.9753V23.6049C22.6575 22.9794 22.9623 22.6666 23.5717 22.6666H32.022C32.615 22.6666 32.9115 22.9794 32.9115 23.6049V31.9753C32.9115 32.5844 32.615 32.8889 32.022 32.8889H23.5717Z" fill="#4361EE" />
        </svg>
        <p>Категория</p>
      </div>
      <ul>
        {
          categoryData?.mainCategory_ru?.map((mainCategoryItem,index) =>
            <li key={uuidv4()} className='category-item'>
              <Link to={`/maincategory/${mainCategoryItem}`} className='category-choice'>{mainCategoryItem}</Link>

              <div className='sub-categories_div'>
                <div className="flex__div">
                  {
                    categoryData.productSubCategories_ru[index].map(categoryItem =>
                      <Link to={`/subcategory/${categoryItem}`} className='categoryItem' key={uuidv4()}>{categoryItem}</Link>)
                  }
                </div>

              </div>


              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>

            </li>
          )
        }
      </ul>
    </div>


  ) : <></>
}

export default Sidebar
