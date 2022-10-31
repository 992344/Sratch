import React from 'react'
import './Logo.css'
const Logo = ({sizeOfLogo}) => {
  return (
    <div>
      <div class="wrapper" >
<div class="box b">
<img src={process.env.PUBLIC_URL+"icons/navbarSymboll.png"} />
</div>
 <span class="box a">BIOFUEL  JUNCTION</span>
 <span class="box c">Partners in Greener Tomorrow</span>
 
</div>
    </div>
  )
}

export default Logo
