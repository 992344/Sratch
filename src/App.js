import React from "react";
import Signin from "./components/signin/Signin";
import { Route, Routes , Router, RouterProvider,useLocation } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Home/Navbar";
import SupplierManagement from "./components/SupplierManagement/SupplierManagement";
import Dispatchnotification from "./components/DispatchNotification/Dispatchnotification";
import Deliverycallan from "./components/DeliveryCallan/Deliverycallan";
import Payment from "./components/Payment/Payment";
import Customeronboarding from "./components/CustomerOnboarding/Customeronboarding";
import Customerpo from "./components/CustomerPO/Customerpo";
import Supplierpo from "./components/SupplierPO/Supplierpo";
import Addnewproduct from "./components/ProductManagement/Addnewproduct";
import Addnewsuplierdetails from "./components/SupplierManagement/Addnewsupplierdetails";
const App = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className="App">
      <div className="main-area">
       
        <div className="left-side">
          location.pathname!=="/sigin"&&<Navbar />
          <Sidebar />
        </div>
        <div className="right-side">
          
          
            <Routes>

            {/* keep all the routes here */}
            <Route path="signin" element={<Signin />} />
            <Route path="productManagement" element={<ProductManagement />} />
            <Route path="addnewproduct" element={<Addnewproduct />} />
            <Route path="supplierManagement" element={<SupplierManagement />} />
            <Route path="addnewsuplierdetails" element={<Addnewsuplierdetails />}/>
            <Route path="dispatchnotification" element={<Dispatchnotification />} />
            <Route path="deliverychallan" element={<Deliverycallan />} />
            <Route path="payment" element={<Payment />} />
            <Route path="customeronboarding" element={<Customeronboarding />} />
            <Route path="customerpo" element={<Customerpo />} />
            <Route path="supplierpo" element={<Supplierpo />} />
           
            <Route path="/" element={<Main />} />
        </Routes> 
        
          
        </div>
      </div>
    </div>
  );
};

export default App;
