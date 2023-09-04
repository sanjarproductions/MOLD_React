import React from 'react'
import { Container } from '../../utils/Utils'
import './About.scss'
import { useLocation } from 'react-router-dom'

const About = () => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Container>
        <div className="about-text">
          <h1>Биз xақимизда</h1>
          <p>Ассалому алайкум ! <br />

            Сизларга шуни маълум киламизки Наманганда махсус қолип (пресс-форма) ларни ясашда ва ишлатишда фойдаланиладиган асбоб-ускуна(инструмент)лар дукони очилди!
            <br />
            Биз сизга буюртма асосида хам сизга керакли булган нарсаларни тез ва арзон нархларда етказиб берамиз.</p>
        </div>

        <img className="about-img" src="https://mold-components-14sxqbw1r-ijalalov69-gmailcom.vercel.app/static/media/office-min%202.153cd0976584138310b4.jpg" alt="" />

        <div className="about-product">
          <ul>
            <li>Металга ишлов берувчи асбоблар (Оправкалар, фрезалар ва хоказолар)</li>
            <li>Пластмасса махсулотлари қуйиш учун ускуналар (Термопластавтоматлар ва қолиплар).</li>
            <li>Улчов асбоблари (Штангенциркуль, микрометр).</li>
            <li>Пластмасса қолиплари ва штамплар учун бутловчи кисмлар (Летниклар, толкателлар, пружиналар)</li>
            <li>Метални сайқаллаш учун ишлатиладиган асбоблар(Керамик тошлар, олмос тошлар, тош коғозлар).</li>
            <li>Қолип (пресс-форма) учун керак буладиган мойлар (Mold release , Mold cleaning , Anti rust).</li>
            <li>Эрозия йули билан металга ишлов берувчи ускуналар (WIRE EDM, SPARK EDM, SUPER DRILL).</li>
            <li>Металга ЧПУ бошкаруви оркали ишлов берувчи ускуналар (VMC CNC)</li>
          </ul>
        </div>
      </Container>
      <></>

    </div>
  )
}

export default About