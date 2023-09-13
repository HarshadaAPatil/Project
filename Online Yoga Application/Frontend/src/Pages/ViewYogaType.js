import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
const ViewYogaType = () => {
  const [yogaTypee, setYogaType] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/yogaTypes/allYogaTypes/`)
      .then((response) => {
        console.log(response);
        setYogaType(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h2>Available Yoga Classes</h2>
      <div className="mt-3 container">
        <form>
          <table className="table" style={{ width: "113ex" }}>
            <thead>
              <tr>
                <th>sr.no</th>
                <th style={{ wordWrap: "unset" }}>
                  Yoga Type
                  <br />
                </th>
                <th>Description</th>
                <th>Path</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {yogaTypee.map((value, index) => {
                return (
                  <>
                    <tr>
                      <td>{index+1}</td>
                      <td>{value.yogaType}</td>
                      <td>{value.description}</td>
                      <td>{value.path}</td>
                      <td>
                        <span>
                          <NavLink
                            className="text-success"
                            style={{
                              width: "15ex",
                              height: "50px",
                              textDecoration: "none",
                            }}
                            to={`/updateYogaType/${value.yogaId}`}
                          >
                            &nbsp; Update &nbsp;
                            <GrUpdate />
                          </NavLink>
                        </span>
                        &nbsp;&nbsp;
                        <NavLink
                          className="text-danger"
                          style={{ width: "15ex", height: "50px" }}
                          onClick={() => {
                            const confirmBox = window.confirm(
                              "Do you really want to delete this Type?"
                            );
                            if (confirmBox === true) {
                              DeleteYogaType(value.yogaId);
                            }
                          }}
                        >
                          Delete &nbsp; <MdDelete />
                        </NavLink>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

function DeleteYogaType(id) {
  fetch(`http://localhost:9090/api/yogaTypes/deleteYogaType/${id}`, {
    method: "DELETE",
  }).then(() => {
    console.log("New Student Added");
  });
  window.location.reload();
}

export default ViewYogaType;
