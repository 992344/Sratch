import React from 'react'
import "./styles/imagecomponent.css"
const ImageComponent = ({sWidth,sHeight,dWidth,dHeight}) => {
  return (
    <div className='logo-component'>
          <div className="main-logo">
             <img src="/icons/navbarSymboll.png" style={{width:sWidth,height:sHeight}} alt="logo"/>
            </div>
            <div className="logoname">
              <img src="/icons/navbarLogo.png" style={{width:dWidth,height:dHeight}} alt="logo"/>
            </div>
    </div>
    
  )
}

export default ImageComponent