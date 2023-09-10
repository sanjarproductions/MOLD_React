import React from 'react'
import './Search.scss'
import logo from '../../img/logo.svg'
import { Container } from '../../utils/Utils'
import Sidebar from '../side-bar/Sidebar'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FiSearch } from "react-icons/fi";
import { instance } from '../../api/axios'
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next'

const Search = () => {
    const {t} = useTranslation()  
    // function changeLang(selectedLangCode) {
    //     i18n.changeLanguage(selectedLangCode)
    // }
    const [inputSearch, setInputSearch] = useState("") //UseSate
    const [searchResults, setSearchResults] = useState([]) //UseSate
    // console.log(inputSearch);

    // console.log(searchResults)
    // console.log(setSearchResults)
    useEffect(() => {
        instance(`/product/search/${inputSearch}`)
            .then(response => setSearchResults(response.data))
            .catch(err => {
                console.log(err)
                setSearchResults([])
            })
        // console.log(inputSearch);
    }, [inputSearch])


    // console.log(searchResults)

    return (
        <div>
            <div className="search_wrapper">
                <Container>
                    <div className="search">
                        <img className='logo' src={logo} alt="" />
                        <div className="search__group">
                            <div className="input_wrapper">
                                <input type="text" placeholder={t("searchPlaceHolder")} value={inputSearch}
                                    onChange={e => setInputSearch(e.target.value)} />

                                {searchResults.length > 0 ?

                                    <div className="search-result">
                                        {
                                            <>
                                                <div className='basic__flex'>
                                                    {/* <Link to={`/productabout/${setSearchResults._id}`}></Link> */}
                                                    <p>Результаты поиска: <span>#{inputSearch}</span> </p>
                                                    <div className="basic__flex">
                                                        <p>Полученные результаты: {searchResults.length}</p>
                                                        <button onClick={() => { setSearchResults([]) }}>Oтмена</button>
                                                    </div>

                                                </div>

                                            </>
                                        }
                                        {searchResults?.map(result =>
                                            <div className='result__item' key={uuidv4()}>
                                                <div className='basic__flex' key={uuidv4()}>
                                                    <img key={uuidv4()} className='result-item__img' src={result?.productImages[0]} alt="" />
                                                    {/* <Link className='result__item-title'>{result?.productName_ru}</Link> */}
                                                    <Link key={uuidv4()} className='result__item-title' to={`/productabout/${result._id}`}>{result?.productName_ru}</Link>
                                                </div>

                                                <p className='price__slider' key={uuidv4()}>
                                                    {`${result?.productSizesAndQuantity[0].price}
                                                    ${result?.productSizesAndQuantity.length > 1 ? "- " + result?.productSizesAndQuantity
                                                        [result?.productSizesAndQuantity.length - 1].price : ""} CУМ`} </p>
                                            </div>)
                                        }
                                    </div> : <></>}

                                <button className='search__button'>
                                    <FiSearch />
                                </button>
                            </div>
                            <div className="sub_navigation">
                                <Sidebar />

                                <NavLink key={uuidv4()} className="route" to="/">{t("mainPageLink")}</NavLink>
                                <NavLink key={uuidv4()} className="route" to="/">{t("partnersPageLink")}</NavLink>
                                <NavLink key={uuidv4()} className="route" to="/about">{t("aboutPageLink")}</NavLink>
                                <NavLink key={uuidv4()} className="route" to="/contact">{t("contactPageLink")}</NavLink>
                            </div>
                        </div>

                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Search
