import React from "react";
import Home from "./Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="sidebar">
      {/* <Home /> */}
      <div id="sidebar1" class="collapse collapse-horizontal show  ">
        <div
          id="sidebar2"
          class="list-group border-none rounded-1 text-sm-start min-vh-auto "
        >
          <Link
            to="productManagement"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "icons/productManagement.png"}
              />
            </span>
            <span> Product Management</span>{" "}
          </Link>
          <a href="#" className="list-group-item sidebar_link" data-bs-parent="#sidebar">
            <div>
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Location.png"} />
            </span>
            <span> Location</span>
            </div>
            <div>
            {">"}
            </div>
            
          </a>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/COM.png"} />
            </span>
            <span> Customer Order Management</span>
          </a>
          <Link
            to="supplierManagement"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              <img
                src={process.env.PUBLIC_URL + "icons/supplierManagement.png"}
              />
            </span>{" "}
            <span> Supplier Management</span>
          </Link>
          <a href="#" className="list-group-item" data-bs-parent="#sidebar">
            <span>
              <img src={process.env.PUBLIC_URL + "icons/SupplierControl.png"} />
            </span>{" "}
            <span> Supplier Control Centre</span>
          </a>
          <Link
            to="dispatchnotification"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span> Dispatch Notification</span>
          </Link>
          <Link
            to="deliverychallan"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Challen.png"} />
            </span>{" "}
            <span> Delivery Challan</span>
          </Link>
          <Link
            to="payment"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span> Payment</span>
          </Link>
          <Link
            to="customeronboarding"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span> Customer Onboarding</span>
          </Link>
          <Link
            to="customerpo"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span> Customer PO</span>
          </Link>
          <Link
            to="supplierpo"
            className="list-group-item"
            data-bs-parent="#sidebar"
          >
            <span>
              <img src={process.env.PUBLIC_URL + "icons/Dispatch.png"} />
            </span>{" "}
            <span> Supplier PO</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
