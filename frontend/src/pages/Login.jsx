import React from 'react'
import "./login.css"

function Login() {
  return (
    <form className="adminlogin">
    <div className="screen-1 box">
      <svg className="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width={300} height={300} viewBox="0 0 640 480" xmlSpace="preserve">
        <g transform="matrix(3.31 0 0 3.31 320.4 240.4)">
          <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(61,71,133)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
        </g>
        <g transform="matrix(0.98 0 0 0.98 268.7 213.7)">
          <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
        </g>
        <g transform="matrix(1.01 0 0 1.01 362.9 210.9)">
          <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
        </g>
        <g transform="matrix(0.92 0 0 0.92 318.5 286.5)">
          <circle style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} cx={0} cy={0} r={40} />
        </g>
        <g transform="matrix(0.16 -0.12 0.49 0.66 290.57 243.57)">
          <polygon style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} points="-50,-50 -50,50 50,50 50,-50 " />
        </g>
        <g transform="matrix(0.16 0.1 -0.44 0.69 342.03 248.34)">
          <polygon style={{stroke: 'rgb(0,0,0)', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeDashoffset: 0, strokeLinejoin: 'miter', strokeMiterlimit: 4, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} vectorEffect="non-scaling-stroke" points="-50,-50 -50,50 50,50 50,-50 " />
        </g>
      </svg>
      <div className="email">
        <div className="blur"></div>
        <label htmlFor="email">Email Address</label>
        <div className="sec-2">
          <ion-icon name="mail-outline" />
          <input type="email" name="email" placeholder="Username@gmail.com" />
        </div>
      </div>
      <div className="password">
        <div className="blur"></div>
        <label htmlFor="password">Password</label>
        <div className="sec-2">
          <ion-icon name="lock-closed-outline" />
          <input className="pas" type="password" name="password" placeholder="············" />
          <ion-icon className="show-hide" name="eye-outline" />
        </div>
      </div>
      <button className="btn w-100">Login </button>
    </div>
  </form>
  )
}

export default Login