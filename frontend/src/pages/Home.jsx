import React, { useEffect, useState } from "react";
import axios from "axios";
import AddData from "./AddData";
// import {useParams} from 'react-router-dom'
export default function Home(match) {
  const [data, setdata] = React.useState([]);
  const [toggle, setToggle] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [updateId, setupdateId] = useState("");
  const [search, setSearchData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [editData, seteditData] = useState({});
  // const {id} = useParams()
  const handleGetData = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/user/getall-user"
    );
    setdata(data.result);
    setToggle((pre) => !pre);
  };
  const handleDelete = async (id) => {
    const data = await axios.delete(
      `http://localhost:5000/api/user/delete-user/${id}`
    );
    setToggle((pre) => !pre);
  };
  const handleEdits = (id) => {
    setupdateId(id);
    const EditData = data.filter((item) => item._id == id);
    seteditData(EditData[0]);
  };
  const handleUpdateData = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(
      `http://localhost:5000/api/user/update-user/${updateId}`,
      editData
    );
    console.log(data);
  };
  const handleSearchData = async () => {
    setLoader(true);
    const { data } = await axios.post(
      "http://localhost:5000/api/user/search-Data",
      { search }
    );
    console.log(data);
    setdata(data.result);
    setLoader(false);
  };
  useEffect(() => {
    handleGetData();
  }, [toggle]);
  return (
    <div>
      <AddData data={handleGetData} />
      <div>
        <button
          className="btn btn-warning mt-3"
          data-bs-target="#addData"
          data-bs-toggle="modal"
        >
          Add Data
        </button>
        <div class="d-flex justify-content-around"></div>
        <br />
      </div>
      <br />
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">State</th>
            <th scope="col">City</th>
            <th scope="col">Pincode</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loader ? (
            <div className="spinner spinner-border"></div>
          ) : data.length > 0 ? (
            data.map((item, i) => (
              <tr>
                <th>{i + 1}</th>
                <th>{item.firstName}</th>
                <th>{item.lastName}</th>
                <th>{item.email}</th>
                <th>{item.state}</th>
                <th>{item.city}</th>
                <th>{item.pin}</th>
                <th>
                  <button
                    data-bs-target="#editmodal"
                    data-bs-toggle="modal"
                    className="btn btn-success"
                    onClick={() => {
                      handleEdits(item._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    data-bs-target="#deletemodal"
                    data-bs-toggle="modal"
                    className="btn btn-danger ms-2"
                    onClick={() => setDeleteId(item._id)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))
          ) : (
            <h1>No Data Found OR Search propar Keyword</h1>
          )}
        </tbody>
      </table>

      {/* modal code */}

      {/* Delete modal  start*/}
      <div class="modal fade" id="deletemodal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deletemodal">
                Are You Sure
              </h5>
              <button
                type="button"
                class="close"
                data-bs-target="#deletemodal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button
                className="btn btn-danger w-50"
                data-bs-dismiss="modal"
                onClick={() => handleDelete(deleteId)}
              >
                Yes
              </button>
              <button className="btn btn-success w-50">No</button>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal end */}

      {/* update modal  start*/}
      <div class="modal fade" id="editmodal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editmodal">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-bs-target="#editmodal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleUpdateData}>
                <input
                  type="email"
                  value={editData.email}
                  disabled
                  onChange={(e) =>
                    seteditData({ ...editData, email: e.target.value })
                  }
                  placeholder="email"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  value={editData.firstName}
                  onChange={(e) =>
                    seteditData({ ...editData, firstName: e.target.value })
                  }
                  placeholder="first name"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  value={editData.lastName}
                  onChange={(e) =>
                    seteditData({ ...editData, lastName: e.target.value })
                  }
                  placeholder="last name"
                  className="form-control"
                />
                <br />
                <select
                  value={editData.state}
                  onChange={(e) =>
                    seteditData({ ...editData, state: e.target.value })
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
                  value={editData.pin}
                  onChange={(e) =>
                    seteditData({ ...editData, pin: e.target.value })
                  }
                  type="number"
                  placeholder="pincode"
                  className="form-control"
                />
                <br />
                <input
                  value={editData.city}
                  onChange={(e) =>
                    seteditData({ ...editData, city: e.target.value })
                  }
                  type="text"
                  placeholder="City"
                  className="form-control"
                />
                <br />
                <button className="btn btn-success " data-bs-dismiss="modal">
                  update{" "}
                </button>
                <button className="btn btn-danger ms-3" data-bs-dismiss="modal">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* update modal end */}
    </div>
  );
}
