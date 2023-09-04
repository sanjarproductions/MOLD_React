import React from 'react'
import './Search.scss'
import logo from '../../img/logo.svg'
import { Container } from '../../utils/Utils'
import Sidebar from '../side-bar/Sidebar'
import { NavLink } from 'react-router-dom'

const Search = () => {
    return (
        <div>
            <div className="search_wrapper">
                <Container>
                    <div className="search">
                        <img src={logo} alt="" />
                        <div className="search__group">
                            <div className="input_wrapper">
                                <input type="text" placeholder='Поиск...' />
                                <button>
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                            </div>
                            <div className="sub_navigation">
                                <Sidebar />

                                <NavLink to="/">Главная</NavLink>
                                <NavLink to="/">Партнеры</NavLink>
                                <NavLink to="/about">О нас</NavLink>
                                <NavLink to="/contact">Контакт</NavLink>
                            </div>
                        </div>

                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Search
