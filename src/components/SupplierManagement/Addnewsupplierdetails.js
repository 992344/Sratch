import React from 'react'
import Succesmodal from '../Modal/Succesmodal'


const Addnewsupplierdetails = () => {
  return (
    <div>
      <div className="AddNewHeading">
        <h5>Supply Management</h5>
      </div>
      <div id="AddNewProductForm" class="row g-3">
        <div class="col-sm">
          <label for="lname">
            Discription<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control " />
          <label for="lname">
            Weight (in gm)<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control " />
          <label for="lname">
            RM<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control " />
          <label for="lname">
            Moisture<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control " />
          <label for="lname">
            Discription<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control " />
          <label for="lname">
            Weight (in gm)<span class="req-field">*</span>{" "}
          </label>
          <input type="text" class="form-control " />
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              type="button"
              class="btn p-1 btn-outline-secondary"
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
            <i onClick={() => console.log(13)}>
              <Succesmodal openButtonText="Save" />
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addnewsupplierdetails
