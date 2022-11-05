import React from "react";
import "../styles/productmanagement.css";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import Addnewproduct from "./Addnewproduct";
import Succesmodal from "../Modal/Succesmodal";

const ProductManagement = () => {
  const [show,setShow]=useState(true)
  const [showModal,setShowModal]=useState(false)
const handleClick=()=> {
    setShow(true)
  }
  

  return (
    <>
    <div>
      <div>
        <span id="heading">
         <span> <img src="/icons/pm.png" alt="logo" /> </span>
          <h5>Product Management</h5>
        </span>
        
        <button onClick={()=>handleClick()} id="addbutton">Add New</button>
        
      </div>
      <div>
        <table id="customers">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Discription</th>
            <th scope="col">Weight</th>
            <th scope="col">Packing</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
          <tr>
            <td scope="row">1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href=""><img src="/icons/edit.ico" alt="logo" /></a>
            </td>
            <td>
            <a href=""><img src="/icons/delete.ico" alt="logo" /></a>
            </td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href=""><img src="/icons/edit.ico" alt="logo" /></a>
            </td>
            <td>
            <a href=""><img src="/icons/delete.ico" alt="logo" /></a>
            </td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <a href=""><img src="/icons/edit.ico" alt="logo" /></a>
            </td>
            <td>
            <a href=""><img src="/icons/delete.ico" alt="logo" /></a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    {show&&<Addnewproduct setShow={setShow} setShowModal={setShowModal}/>}
    {showModal&&(<Succesmodal setShowModal={setShowModal}/>)}
    </>
  );
};

export default ProductManagement;
