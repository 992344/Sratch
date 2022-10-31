import React from "react";
import Home from "./Home";
import "./Home.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
        <Home/>
      <div
        id="sidebar1"
        class="collapse collapse-horizontal show  "
        style={{ width: 335, marginTop: 70 }}
      >
        <div
          id="sidebar2"
          class="list-group border-none rounded-1 text-sm-start min-vh-auto "
        
        >
          <Link to="ProductManagement" className="list-group-item" data-bs-parent="#sidebar">
            <span  > <img src={process.env.PUBLIC_URL + "icons/productManagement.png"} /></span>
            <span>  Product Management</span>{" "}
          </Link>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Location.png"} />
            </span>
            <span>  Location</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/COM.png"} />
            </span>
            <span>  Customer Order Management</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img
                src={process.env.PUBLIC_URL + "icons/supplierManagement.png"}
              />
            </span>{" "}
            <span>  Supplier Management</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/SupplierControl.png"} />
            </span>{" "}
            <span>  Supplier Control Centre</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span>  Dispatch Notification</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Challen.png"} />
            </span>{" "}
            <span>  Delivery Challan</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span> Payment</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span> Customer Onboarding</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span>  Customer PO</span>

          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span>  Supplier PO</span>

          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
