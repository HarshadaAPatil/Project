import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

export default function ViewClasses() {
  const [yogaTypee, setYogaType] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/liveclass/allLiveClass`)
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
      <h2>Available Live Classes</h2>
      <div className="mt-3 container">
        <form>
          <table className="table" style={{ width: "133ex" }}>
            <thead>
              <tr>
                <th>sr.no</th>
                <th style={{ wordWrap: "none", width: "10ex" }}>Yoga Type</th>
                <th>Description</th>
                <th>StartTime</th>
                <th>EndTime</th>
                <th>Img</th>
                <th>Price</th>
                <th></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {yogaTypee.map((value, index) => {
                return (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{value.yogaType}</td>
                      <td>{value.description}</td>
                      <th>{value.startTime}</th>
                      <th>{value.endTime}</th>
                      <th>{value.img}</th>
                      <th>{value.price}</th>
                      <td>{value.path}</td>
                      <td>
                        <span>
                          <NavLink
                            className="text-success"
                            style={{
                              width: "0ex",
                              height: "50px",
                              textDecoration: "none",
                            }}
                            to={`/updateClass/${value.liveClassId}`}
                          >
                            &nbsp; Update &nbsp;
                            <GrUpdate />
                          </NavLink>
                        </span>
                        &nbsp;&nbsp;
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div>
            <center>
              <NavLink
                className="text-success"
                style={{
                  width: "0ex",
                  height: "50px",
                  textDecoration: "none",
                }}
                to={`/addClasses`}
              >
                <button className="btn ">Add</button>
              </NavLink>
            </center>
          </div>
        </form>
      </div>
    </>
  );
}
