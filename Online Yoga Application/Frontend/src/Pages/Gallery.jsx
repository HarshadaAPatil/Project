import React, { useEffect, useState } from "react";
import "./header.css";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Gallery = () => {
  const [yogaTypee, setYogaTypee] = useState([]);
  const [filteredGalleryData, setFilteredGalleryData] = useState([]);
  let navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/yogaTypes/allYogaTypes/`)
      .then((response) => {
        setYogaTypee(response.data);
        setFilteredGalleryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    if (searchText.trim() === "") {
      setFilteredGalleryData(yogaTypee);
    } else {
      const filteredData = yogaTypee.filter((item) =>
        item.yogaType.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredGalleryData(filteredData);
    }
  };

  return (
    <>
      <section class="gallary" id="gallary">
        <div class="main-txt">
          <h1>
            <span>G</span>allery
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-3 offset-md-9">
            <div className="d-flex" style={{ border: "0.5px solid" }}>
              <input
                type="search"
                name="search"
                className="form-control"
                height={"1000px"}
                placeholder="Yoga Type"
                onChange={(e) => setSearchText(e.target.value)}
                // style={{border:"none"}}
              />
              <button
                // className="btn btn-outline-secondary ms-2"
                value="Yoga Type"
                style={{
                  border: "none",
                  marginRight: "1ex",
                  backgroundColor: "transparent",
                }}
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div class="container">
          {/* <div className="row">
          <div className="col-lg-3 offset-md-9">
            <div className="d-flex">
              <input
                type="search"
                name="search"
                className="form-control"
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-outline-secondary ms-2"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div> */}

          <div
            class="row mt-3"
            style={{
              objectFit: "none",
              width: "fit-content",
              justifyContent: "center",
              padding: 0,
              margin: 0,
            }}
          >
            {filteredGalleryData.length ? (
              filteredGalleryData.map((val) => {
                return (
                  <>
                    <div
                      className="col-lg-4 col-md-3 col-sm-12  card m-5 "
                      style={{
                        border: "2px solid orange",
                        boxShadow: "1px 0px 2px 2px",
                        width: "auto",
                      }}
                    >
                      {/* </div>
                  <div className="card col-md-3 py-3 py-md-0 m-2"> */}
                      <div
                        class=""
                        style={{
                          justifyItems: "center",
                          justifyContent: "space-around",
                        }}
                      >
                        <div style={{objectFit: "fill"}}>
                          {/* <a href='/yogaType'style={{alignContent:"center"}} > */}
                          {/* <NavLink className=" " to="/yogaType"> */}
                          <NavLink className="nav-link" to={`/yogaType/${val.yogaId}`}>
                          {/* <YogaType vid={val.vid} /> */}
                          {console.log(val)}
                          <img
                            src={val.img}
                            alt=""
                            height="200px"
                            style={{ width: "43ex", objectFit: "fill" }}
                            loading="lazy"
                          />
                          </NavLink>
                          <br/>
                          <h5 style={{textAlign:"center"}}>{val.yogaType}</h5>
                          {/* </NavLink> */}
                          {/* </a> */}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="d-flex justify-content-center" style={{height:"100vh", alignItems:"center"}}>
                Data Not Found
                {/* <Gallery /> */}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
// {yogaTypee.map((value, index) => {
//   // return (<>
//   //   <div> </div></>);
// })}

// const [filteredGalleryData, setFilteredGalleryData] = useState(galleryData)
// const [searchText, setSearchText] = useState('')

//   useEffect(() => {
//     getData()
//   }, [])

//   const getData = () => {
//     axios
//       .get('http://localhost:9090/api/yogaTypes/allYogaTypes/')
//       .then((res) => {
//         setBookingList(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
// const handleSearch = () => {
//   if (searchText.trim() === '') {
//     setFilteredGalleryData(galleryData)
//   } else {
//     const filteredData = galleryData.filter((item) =>
//       item.title.toLowerCase().includes(searchText.toLowerCase()),
//     )
//     setFilteredGalleryData(filteredData)
//   }
// }
// return (
// <>
//   <section class="gallary" id="gallary">
//   <div class="main-txt">
//         <h1>
//           <span>G</span>allery
//         </h1>
//       </div>
//       <div className="row">
//         <div className="col-lg-3 offset-md-9">
//           <div className="d-flex" style={{border:"0.5px solid"}}>

//             <input
//               type="search"
//               name="search"
//               className="form-control"
//               height={"1000px"}
//               placeholder="Yoga Type"
//               onChange={(e) => setSearchText(e.target.value)}
//               // style={{border:"none"}}
//             />
//             <button
//               // className="btn btn-outline-secondary ms-2"
//               value="Yoga Type"
//               style={{border:"none",marginRight:"1ex",backgroundColor:"transparent"}}
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//     <div class="container">
//       {/* <div className="row">
//         <div className="col-lg-3 offset-md-9">
//           <div className="d-flex">
//             <input
//               type="search"
//               name="search"
//               className="form-control"
//               placeholder="Search"
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//             <button
//               type="button"
//               className="btn btn-outline-secondary ms-2"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div> */}

//       <div class="row mt-3" style={{objectFit: "none", width: "fit-content", justifyContent: "center", padding: 0,
// margin: 0}}>
//         {filteredGalleryData.length ? (
//           filteredGalleryData.map((val) => {
//             return (
//               <>

//               <div  className="col-lg-4 col-md-3 col-sm-12  card m-5 "style={{ border: "2px solid orange", boxShadow:"1px 0px 2px 2px",width:"auto" }}
//         >

//               {/* </div>
//                 <div className="card col-md-3 py-3 py-md-0 m-2"> */}
//                   <div class="" style={{justifyItems:"center",justifyContent:"space-around"}}>
//                     <div>
//                   {/* <a href='/yogaType'style={{alignContent:"center"}} > */}
//                   {/* <NavLink className=" " to="/yogaType"> */}
//                    {/* <Link to={"/yogaType"}  vid={val.vid}> */}
//                     <YogaType vid={val.vid} />
//                    <img
//                       src={val.img}
//                       alt=""
//                       height="200px"
//                       style={{width:"43ex", objectFit:"fill"}}
//                       loading="lazy"
//                     />
//                     {/* </Link> */}
//                     {/* </NavLink> */}
//                     {/* </a> */}
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )
//           })
//         ) : (
//           <div className="d-flex justify-content-center">
//             Data Not Found
//           </div>
//         )}
//       </div>
//     </div>
//   </section>
// </>
// )
// }

export default Gallery;
