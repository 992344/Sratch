import React, { useState } from "react";
import ReactModal from "react-modal";

import "../styles/succesmodal.css";


ReactModal.setAppElement("#root");

const Succesmodal = ({ children, openButtonText }) => {
    const customStyles = {
        content: {
          top: '40%',
          left: '50%',
          right: '30%',
          bottom: '10%',
          marginRight: '-25%',
          transform: 'translate(-50%, -50%)',
          borderRadius:'5%'
        },
      };
      
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
    <div   >
      <button onClick={openModal}>{openButtonText}</button>
      <ReactModal isOpen={isOpen}  style={customStyles} onRequestClose={closeModal}>
        
        <div className="Success-modal">
        
   <span> <img src="/icons/okIcon.png"  alt="logo"/></span><br />
   <h3>Success !</h3>
   <label htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>
       <br /> <button className="succesmodalButton" onClick={closeModal}>Ok</button>
        </div>
      </ReactModal>
      </div>
    </>
  );
};

export default Succesmodal;
