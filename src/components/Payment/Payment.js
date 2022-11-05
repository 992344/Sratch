import React from "react";
import "../styles/productmanagement.css";

const Payment = () => {
  return (
    <div>
      <div>
        <span id="heading">
          <span>
            {" "}
            <img src="/icons/dispatchnoti.png" alt="logo" />{" "}
          </span>
          <span>
            <h5> Payment</h5>
          </span>
        </span>
        {/* <button id="addbutton">Add New</button> */}
      </div>
      <div>
        <table id="customers">
          <tr>
            <th scope="col">Notification No.</th>
            <th scope="col"> Supplier</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Delivery Date</th>
            <th scope="col">Qty</th>
            <th scope="col">Approved Qty</th>
            <th scope="col">Delivery No</th>
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
              <a href="">
                <img src="/icons/edit.ico" alt="logo" />
              </a>
            </td>
            <td>
              <a href="">
                <img src="/icons/delete.ico" alt="logo" />
              </a>
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
              <a href="">
                <img src="/icons/edit.ico" alt="logo" />
              </a>
            </td>
            <td>
              <a href="">
                <img src="/icons/delete.ico" alt="logo" />
              </a>
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
              <a href="">
                <img src="/icons/edit.ico" alt="logo" />
              </a>
            </td>
            <td>
              <a href="">
                <img src="/icons/delete.ico" alt="logo" />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Payment;
