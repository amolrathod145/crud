import React, { useEffect, useState } from "react";

import axios from "axios";

export default function AddData({ props }) {
  const [addData, setaddData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    state: "",
    pin: "",
    city: "",
  });
  const handleData = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "http://localhost:5000/api/user/add-user",
      addData
    );
    console.log(data);
    props();
    e.target.reset();
  };

  return (
    <>
      <div class="modal fade " id="addData">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addData">
                Add Data
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleData}>
                <input
                  max={5}
                  type="email"
                  onChange={(e) =>
                    setaddData({ ...addData, email: e.target.value })
                  }
                  placeholder="email"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setaddData({ ...addData, firstName: e.target.value })
                  }
                  placeholder="first name"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setaddData({ ...addData, lastName: e.target.value })
                  }
                  placeholder="last name"
                  className="form-control"
                />
                <br />
                <select
                  onChange={(e) =>
                    setaddData({ ...addData, state: e.target.value })
                  }
                  name=""
                  id=""
                  className="form-select"
                >
                  <option value="" selected hidden disabled>
                    Select State
                  </option>
                  <option value="goa">Goa</option>
                  <option value="Gujrat">Gujrat</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
                <br />
                <input
                  onChange={(e) =>
                    setaddData({ ...addData, pin: e.target.value })
                  }
                  type="number"
                  maxLength="5"
                  placeholder="pincode"
                  className="form-control"
                />
                <br />
                <input
                  onChange={(e) =>
                    setaddData({ ...addData, city: e.target.value })
                  }
                  type="text"
                  placeholder="City"
                  className="form-control"
                />
                <br />
                <button className="btn btn-success" data-bs-dismiss="modal">
                  Add
                </button>
                <button className="btn btn-danger" data-bs-dismiss="modal">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
