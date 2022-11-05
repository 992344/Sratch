import React from "react";
import "../styles/productmanagement.css";
import { Link, useNavigate } from "react-router-dom";


const SupplierManagement = () => {
  const navigate=useNavigate();
  const handleClick=()=> {
    navigate("/addnewsuplierdetails")
  }
  return (
    <div>
      <div>
        <span id="heading">
         <span> <img src="/icons/supman1.png" alt="logo" /> </span>
          <span><h5> Supplier Management</h5></span>
        </span>   
        <button id="addbutton"  onClick={()=>handleClick()} >Add New</button>
      </div>
      <div>
        <table id="customers">
          <tr>
            <th scope="col">ID</th>
            <th scope="col"> Name</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Pincode</th>
            <th scope="col">Location</th>
            <th scope="col">Satus</th>
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
  );
};

export default SupplierManagement;
