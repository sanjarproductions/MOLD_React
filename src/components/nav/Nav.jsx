import React from 'react'
import './Nav.scss'
import i18n from "../../language/i18next"
import emailContact from '../../img/email.svg'
import phoneContact from '../../img/phone_contact.svg'
import ruLang from '../../img/ru.png'
import uzLang from '../../img/uzb.svg'
import { Container } from '../../utils/Utils'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const Nav = () => {
    const exceptions = ["/login"];
    const location = useLocation()

    const {t} = useTranslation()  
    function changeLang(selectedLangCode) {
        i18n.changeLanguage(selectedLangCode)
    }
    return !exceptions.includes(location.pathname) ? (
        <div>
            <nav>
                <Container>
                    <div className="flex">
                        {/* <h2>{t("greeting")}</h2> */}
                        <div className="lang">
                            <img src={uzLang} alt="" className='lang_uz_img' onClick={() => changeLang("uz")}/>
                            <img src={ruLang} alt="" className='lang_ru_img' onClick={() => changeLang("ru")}/>
                        </div>
                        <a href="tel: +998911860085" className="phone contact-method">
                            <img src={phoneContact} alt="" />+998 91 186 00 85</a>
                        <a href="mailto: erkinjon.hodjaev@gmail.com" className="email contact-method">
                            <img src={emailContact} alt="" /> erkinjon.hodjaev@gmail.com</a>
                    </div>
                </Container>
            </nav>
        </div>
    ) : <></>
}

export default Nav
