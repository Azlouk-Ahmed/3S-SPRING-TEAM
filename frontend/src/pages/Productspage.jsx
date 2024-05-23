import React from 'react'

function Productspage() {
    return (
        <div className="xx prod">
        <div className="ta-c title2">our products</div>
      <div className="dfw container gap3">
        <img src="/image/products-removebg-preview.png" className="jump w16" srcset="" />
        <div className="parag df-c">
          <div className="blur"></div>
          <img src="/image/logo.png" alt="" className="layer" />
          <div className="title2">
          Empowering <div className="title1">Minds</div>, Igniting <div className="title1">Futures</div>: Learn, Grow, Succeed!
          </div>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </ul>
          <div className="df gap3">
            <div className="btn">visit site</div>
            <div className="pr cp" style={{color: "rgba(141, 22, 139, 1) !important"}}>learn more</div>
          </div>
        </div>
      </div>
      <div className="dfw container gap3">
        <div className="parag">
          <div className="blur"></div>
          <div className="title2">Système de Sécurité </div>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </ul>
          <div className="btn">view more</div>
        </div>
        <img src="/image/download-removebg-preview.png" className="jump w16" srcset="" />
      </div>
      <div className="dfw container gap3 w100">
       
        <div className="parag ml">
          <div className="blur"></div>
          <div className="title2">Dream City</div>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing </li>
          </ul>
          <div className="btn">view more</div>
        </div>
      </div>
    </div>
  )
}

export default Productspage