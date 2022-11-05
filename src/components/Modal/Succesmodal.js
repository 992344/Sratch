import React from 'react'

const Succesmodal = ({setShowModal}) => {
  return (
    <div className="black-screen" onClick={()=>setShowModal(false)}> 
    <div className="success-modal" onClick={(e)=>e.stopPropagation()}>
      <button class="btn p-1 btn-outline-secondary" onClick={()=>setShowModal(false)}>Ok</button>
    </div>
  </div>
  )
}

export default Succesmodal