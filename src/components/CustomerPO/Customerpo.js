import React from "react";
import "../styles/productmanagement.css";

const Customerpo = () => {
  return (
    <div>
      <div>
        <span id="heading">
          <span>
            {" "}
            <img src="/icons/dispatchnoti.png" alt="logo" />{" "}
          </span>
          <span>
            <h5>Customer PO</h5>
          </span>
        </span>
        <button id="addbutton">Add New</button>
      </div>
      <div>
        <table id="customers">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer</th>
            <th scope="col">PO No</th>
            <th scope="col">Product Code</th>
            <th scope="col">Qty</th>
            <th scope="col">PO Date </th>
            <th scope="col">Delivery Date</th>
            <th scope="col">Total Value (INR)</th>
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

export default Customerpo;
