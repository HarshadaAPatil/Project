import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/users/allusers/`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
    <br />
      <h2>Registered Users</h2>
      <div className="mt-3 container">
        <form>
          <table className="table" style={{ width: "113ex" }}>
            <thead>
              <tr>
                <th>sr.no</th>
                <th style={{ wordWrap: "unset" }}>
                  Name
                  <br />
                </th>
                <th>Email</th>
                {/* <th>Path</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((value, index) => {
                return (
                  <>
                    <tr>
                      <td>{index+1}</td>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      {/* <td>{value.path}</td> */}
                      <td>
                        
                        <NavLink
                          className="text-danger"
                          style={{ width: "15ex", height: "50px" }}
                          onClick={() => {
                            const confirmBox = window.confirm(
                              "Do you really want to delete this User?"
                            );
                            if (confirmBox === true) {
                              DeleteUser(value.id);
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

function DeleteUser(id) {
  fetch(`http://localhost:9090/api/users/delete/${id}`, {
    method: "DELETE",
  }).then(() => {
    console.log("User Deleted Added");
  });
  window.location.reload();
}

export default UserList;
