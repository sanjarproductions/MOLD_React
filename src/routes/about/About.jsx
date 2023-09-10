import React from 'react'
import { Container } from '../../utils/Utils'
import './About.scss'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const About = () => {    
  const {t} = useTranslation()  
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Container>
        <div className="about-text">
          <h1>{t("aboutUsGreeting")}</h1>
          <p>{t("aboutUsGreetingP")}</p>
        </div>

        <img className="about-img" src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/office-min%202.153cd0976584138310b4.jpg" alt="" />

        <div className="about-product">
          <ul>
            <li>{t("footerLi1")}</li>
            <li>{t("footerLi2")}</li>
            <li>{t("footerLi3")}</li>
            <li>{t("footerLi4")}</li>
            <li>{t("footerLi5")}</li>
            <li>{t("footerLi6")}</li>
            <li>{t("footerLi7")}</li>
          </ul>
        </div>
      </Container>
      <></>

    </div>
  )
}

export default About