import React from 'react'
import './header.css'
const AboutUs = () => {
  return (
    <div>
      
      <section class="about" id="about">
      <div class="main-txt" style={{ paddingTop: '30px' }}>
            <h1>
              About <span>Us</span>
            </h1>
          </div>
          <br />
        <div class="container">
          
        
          <div class="row" style={{ marginTop: '0px' }}>
            <div class="col-md-5 py-3 py-md-0" style={{paddingLeft:'20ex',marginTop:'10ex'  }}>
              <div className='card' >
{/* height:'auto', border: 'none', paddingTop: '100px',marginLeft: '100px' */}
                <img
                  src={process.env.PUBLIC_URL + '/images/about.jpg'}
                  alt=""
                  height="200px"
                  style={{padding:0,height:'auto'}}
                />
              </div>
            </div>

            <div class="col-md-5 py-3 py-md-0" style={{margin: '15px'}}>
              <h2>How Yoga Class Work.</h2>
              <p className="text-justify">
                Yoga is an ancient practice that has changed over time. Modern
                yoga focuses on poses designed to stimulate inner peace and
                physical energy. Ancient yoga did not place as much emphasis on
                fitness. Instead, it revolved around cultivating mental focus
                and expanding spiritual energy. There are many different types
                of yoga available. The style a person chooses will depend on
                their expectations and level of physical agility. People with
                certain health conditions, such as sciatica, should approach
                yoga slowly and with caution. Yoga can help support a balanced,
                active lifestyle. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsam
                molestiae odit? Temporibus vel labore eveniet dignissimos non,
                vitae dolorum exercitationem enim molestiae! Asperiores deserunt
                voluptates beatae est alias! Vero saepe dolores molestias? Amet
                nisi minus ipsum ex non recusandae temporibus facilis earum unde
                quam repellat illum aliquid, delectus soluta quod autem
                molestiae nesciunt doloremque, quis repudiandae dolores modi
                esse hic laboriosam. Ad reprehenderit sapiente voluptates et
                esse quibusdam odio expedita temporibus consequatur labore, hic
                fugit quam! Pariatur, nulla maiores? Id, aliquid blanditiis
                doloremque odit fugiat illo deleniti laborum neque eum, quisquam
                exercitationem nostrum laudantium est deserunt provident.
              </p>
              <button id="about-btn">
                <a
                  href="https://www.technofunc.com/index.php/domain-knowledge/travel-and-tourism-domain/item/what-is-travel-tourism"
                  style={{ textDecoration: 'none', color: 'black' }}
                  target="_blank"
                >
                  Read More...
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <h2 className="bg-info-subtle mb-0" style={{ textAlign: "center" }}>Our Team<hr style={{border: "none"}}/></h2> */}
      <div class="main-txt" style={{ paddingTop: '30px' }}>
            <h1>
               Our <span>Team</span>
            </h1>
          </div>
          <br />
      <div className="row bg-warning-subtle mt-0">
        <div className="col-md-4 col-sm-12">
          <h6>
            <div className=" bg-warning-subtle p-3 text-center">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.dk4LxSqVvGaASCXxZW3p3wAAAA&pid=Api&P=0&h=180"
                alt="Akshay"
                style={{ width: "90%" }}
              />
              <div className="container row mt-4" style={{height:"10rem"}}>
                <div className="row"><h2>Darshan Gaikwad</h2></div>
                <p className="row">PRN No:- </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>darshan@example.com</p>
                {/* <!-- <p><button className="button">Contact</button></p> --> */}
              </div>
            </div>
          </h6>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className=" bg-warning-subtle p-3 text-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.wd9-92-Dw4SVYpzqZMtCvwHaHa&pid=Api&P=0&h=180"
              alt="Harshada"
              style={{ width: "90%" }}
            />
            <div className="container row mt-4" style={{height:"10rem"}}>
              <h2 className="row">Harshada Patil</h2>
              <p className="row">PRN NO:- </p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>harshada@example.com</p>
              {/* <!-- <p><button className="button">Contact</button></p> --> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="bg-warning-subtle p-3 text-center" style={{height:""}}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.dk4LxSqVvGaASCXxZW3p3wAAAA&pid=Api&P=0&h=180"
              alt="Yashashree"
              style={{ width: "90%" }}
            />
            <div className="container row mt-4" style={{height:"10rem"}}>
              <h2 className="row">Prasad Gaikwad</h2>
              <p className="row">PRN No:- </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>prasad@example.com</p>
              {/* <!-- <p><button className="button">Contact</button></p> --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
