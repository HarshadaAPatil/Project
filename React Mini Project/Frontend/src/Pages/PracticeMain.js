import "./practice.css";
function  PracticeMain(){

    return(
        <>
     <div className="tag"   >
   {/* <div  className="bg-secondary">   */}
   <h1 className="text-center fs-1 text-primary " style={{fontFamily:"cursive"}}>Welcome to Quiz App</h1> 
          
  <div className="row justify-content-center " style={{paddingTop:"21%"}}>
    <div className="col-md-9 col-sm-6">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src="./Images/java.jpeg" className="card-img-top w-100" alt="..." style={{height: 250}} />
            
            <div className="card-body">
              
              {/* <Link to={"/practice-java"}>click here</Link> */}
             <h3> <input type="button"value="Java"className="fs-3 fs-3 text-dark form-control bg-warning"></input></h3>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src="./Images/Databse.webp" className="card-img-top w-100" style={{height: 250}} alt="..." />
            <div className="card-body">
             
              {/* <Link to={"/practice-sql"}>click here</Link> */}
            <h3>  <input type="button"value="SQL"className="fs-3 text-dark form-control bg-warning"></input></h3>
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src="./Images/Data Structure.jpeg" className="card-img-top w-100" alt="..." style={{height: 250}} />
            <div className="card-body">
             
              
              {/* <Link to={"/practice-dsa"}>click here</Link> */}
              <h3>  <input type="button"value="SQL"className="fs-3 text-dark form-control bg-warning "></input></h3>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <img src="./Images/Oprating system.jpeg" className="card-img-top w-100" alt="..." style={{height: 250}} />
            <div className="card-body">
              
              {/* <Link to={"/practice-os"}>click here</Link> */}
              <h3>  <input type="button"value="Oprating system"className="fs-3 text-dark form-control bg-warning "></input></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  </div>    
</>
    );
}
export default PracticeMain;