import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Succesmodal from "../Modal/Succesmodal";
import "../styles/addnewproduct.css";
const Addnewproduct = ({setShow,setShowModal}) => {
  const navigate = useNavigate();
  
  const handleCancleClick = () => {
    navigate(-1);
  };
  const saveData=()=>{
    // data saving
    setShow(false)
    setShowModal(true)
  }
  return (
    <>
    <div className="black-screen" onClick={()=>setShow(false)}>
    <div className="modal-area" onClick={(e)=>e.stopPropagation()}>
      <div className="AddNewHeading">
        <h5>Add New Product</h5>
      </div>
      <div id="AddNewProductForm" class="row g-3">
        <div class="col-sm">
          <label for="lname">
            Product Name<span class="req-field">*</span>{" "}
          </label>{" "}
          <input type="text" class="form-control p-1" />
          <label for="lname">
            HSN Code<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            Grade<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            Ash<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            Status<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
        </div>
        <div class="col-sm">
          <label for="lname">
            Discription<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            Weight (in gm)<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            RM<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            Moisture<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              type="button"
              class="btn p-1 btn-outline-secondary"
              onClick={()=>setShow(false)}
            >
              Cancle
            </button>
          </div>
        </div>
        <div class="col-sm">
          <label for="lname">
            Product Image<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            Pack Size<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            GCV<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />
          <label for="lname">
            Packing<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control p-1" />

          <div className="save d-grid gap-2 col-6 mx-auto">
              
          <button  class="btn p-1 btn-outline-secondary" onClick={saveData} >Save</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  
    
    </>
  );
};

export default Addnewproduct;

{
  /* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>console.log(1313)}>Save</button> */
}
