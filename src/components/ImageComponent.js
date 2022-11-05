import React from 'react'
import "./styles/imagecomponent.css"
const ImageComponent = ({sWidth,sHeight,dWidth,dHeight}) => {
  return (
    <div className='logo-component'>
            <div className="logoname">
              <img src="/icons/templet1.png" style={{width:dWidth,height:dHeight}} alt="logo"/>
            </div>
    </div>
    
  )
}

export default ImageComponent