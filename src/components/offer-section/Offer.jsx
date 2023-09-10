import React from 'react'
import './Offer.scss'
import { Container } from '../../utils/Utils'
import { useTranslation } from 'react-i18next'
const Offer = () => {    
    const {t} = useTranslation()  
    return (
        <div className='offer-sectiong_wrapper'>
            <Container>
                <h4 className='offer-title'>{t("weAreOffering")}</h4>
                <div className="offer-sectiong_flex">
                    <div className="item">
                        <b>{t("weAreOffering1")}</b>
                        <p>{t("weAreOffering2")}</p>
                    </div>
                    <div className="item">
                        <b>{t("weAreOffering3")}</b>
                        <p>{t("weAreOffering4")}</p>
                    </div>
                    <div className="item">
                        <b>{t("weAreOffering5")}</b>
                        <p>{t("weAreOffering6")}</p>
                    </div>
                    <div className="item">
                        <b>{t("weAreOffering7")}</b>
                        <p>{t("weAreOffering8")}</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Offer
