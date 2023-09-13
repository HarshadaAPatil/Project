import React from 'react'
import './header.css'

const serviceData = [
  {
    img: process.env.PUBLIC_URL + '/images/yoga_pose_2.png',
    title: 'Anxiety Relief',
    description:
      ' Volutpat euismod erat fermentum bibendum est metus. Ultrices dictumst rhoncus dictum magnis.',
  },
  {
    img: process.env.PUBLIC_URL + '/images/pilates.png',
    title: 'Life Balancing',
    description:
      'Volutpat euismod erat fermentum bibendum est metus. Ultrices dictumst rhoncus dictum magnis.',
    link: 'https://wpastra.com/lifterlms-theme/',
  },
  {
    img: process.env.PUBLIC_URL + '/images/meditation-1.png',
    title: 'Reduce Stress',
    description:
      'Volutpat euismod erat fermentum bibendum est metus. Ultrices dictumst rhoncus dictum magnis.',
    link: 'https://wpastra.com/lifterlms-theme/',
  },
  {
    img: process.env.PUBLIC_URL + '/images/meditation-2.png',
    title: 'Flexible Time',
    description:
      'Volutpat euismod erat fermentum bibendum est metus. Ultrices dictumst rhoncus dictum magnis.',
    link: 'https://www.tourmyindia.com/states/sikkim/',
  },
  {
    img: process.env.PUBLIC_URL + '/images/pilates.png',
    title: 'Health Tips',
    description:
      'Volutpat euismod erat fermentum bibendum est metus. Ultrices dictumst rhoncus dictum magnis.',
    link: 'https://www.tourmyindia.com/states/karnataka/',
  },
  {
    img: process.env.PUBLIC_URL + '/images/meditation-1.png',
    title: 'Life Consultation',
    description:
      'Volutpat euismod erat fermentum bibendum est metus. Ultrices dictumst rhoncus dictum magnis.',
    link: 'https://www.tourmyindia.com/states/tamilnadu/',
  },
]
const Services = () => {
  return (
    <>
    
      <section className="services" id="services">
      <div className="main-text">
            <h1>
              <span>S</span>ervices
            </h1>
          </div>
        <div className="container">
          

          <div className="row mt-3">
            {serviceData.map((val) => {
              return (
                <>
                  <div className="col-md-4 py-3 py-md-0 mt-3">
                    <a
                      href="https://wpastra.com/lifterlms-theme/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <div
                        className="card "
                        style={{
                          height: '250px',
                          textAlign: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <img
                          src={val.img}
                          alt=""
                          height="80px"
                          width="90px"
                          loading="lazy"
                          style={{
                            borderRadius: '50%',
                          }}
                          className="service1 mt-4"
                        />
                        <div className="card-body">
                          <h3>{val.title}</h3>
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
