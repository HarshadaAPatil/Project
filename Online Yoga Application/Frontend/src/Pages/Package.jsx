import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import './header.css'

const packageData = [
  {
    title: 'Hatha Yoga',
    description:
      'Hatha means force and is more traditionally defined as the yoga of force, or the means of attaining a state of yoga through force. So Hatha yoga can be considered as anything you might do with the body',
    price: '₹6k',
    image: process.env.PUBLIC_URL + '/images/n27.jpg',
    sdate: '25/2/2023',
    edate: '20/8/2023',
    rating: 5,
  },
  {
    title: 'Vinyasa Yoga',
    description:
      'Vinyasa Flow yoga emphasizes the sequential movement between postures, coordinated with and guided by deliberate breath. The Vinyasa practice becomes a moving meditation that creates strength, freedom and fluidity in the body and mind.',
    price: '₹10k',
    image: process.env.PUBLIC_URL + '/images/n7.jpg',
    sdate: '25/2/2023',
    edate: '20/8/2023',
    rating: 5,
  },
  {
    title: 'Kundalini Yoga',
    description:
      'Kundalini yoga is a form of yoga that involves chanting, singing, breathing exercises, and repetitive poses. Its purpose is to activate your Kundalini energy, or shakti. This is a spiritual energy thats said to be located at the base of your spine.',
    price: '₹15k',
    image: process.env.PUBLIC_URL + '/images/n11.jpg',
    sdate: '25/2/2023',
    edate: '20/8/2023',
    rating: 4,
  },
  {
    title: 'Intuitive Yoga',
    description:
      'the ability to utilize the tools of Yogic truth (Sat) and bring these teachings intuitively into the present now moment, with relevance to the mind-body connection. It is a way of life, moving with the breath, using the body as an expression of art.',
    price: '₹7k',
    image: process.env.PUBLIC_URL + '/images/n4.jpg',
    sdate: '25/2/2023',
    edate: '20/8/2023',
    rating: 2,
  },
  {
    title: 'Aroma Yoga',
    description:
      'Aroma yoga is yoga where essential oils are used during the yoga postures. Using the 100% pure oil we use during the workshop, you can deepen your yoga and meditation practice even more. The oils support you mentally and spiritually.',
    price: '₹50k',
    image: process.env.PUBLIC_URL + '/images/n3.jpg',
    sdate: '25/2/2023',
    edate: '20/8/2023',
    rating: 5,
  },
  {
    title: 'Slow Yoga',
    description:
      'slow flow yoga. In a typical Slow Flow class, you will practice about half the number of poses you might practice in a Flow class. The pace is meditative, emphasizing peace and calm in body and mind. ',
    price: '₹50k',
    image: process.env.PUBLIC_URL + '/images/n9.jpg',
    sdate: '25/2/2023',
    edate: '20/8/2023',
    rating: 4,
  },
]
const Package = () => {
  // let id=useParams();//taking id of user
  const [liveClasses, setLiveClasses] = useState([]);
  // const [filteredGData, setFilteredGalleryData] = useState([]);
  let navigate=useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/liveclass/allLiveClass`)
      .then((response) => {
        setLiveClasses(response.data);
        console.log(liveClasses)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 

  return (
    <>
    <div className="main-txt">
            <h1>
              <span>L</span>ive <span>C</span>alasses
            </h1>
          </div>
      <section className="packages" id="packages">
        <div className="container">
          
          <div className="row" style={{height:"auto"}}>
            {liveClasses &&
              liveClasses.map((item) => {
                return (
                  <>
                    <div className="col-md-4 py-3 py-md-0 mt-3" style={{paddingBottom:"5px",height:"auto"}}>
                      <div className="card" style={{ height: '580px' }}>
                        <img
                          src={item.img}
                          className="img-fluid card-img-top"
                          alt=""
                        />
                        
                        <div className="card-body" style={{height:"auto"}}>
                          <h3>{item.yogaType}</h3>
                          <p>{item.description}</p>
                
                          <p>
                            Start Date :-<strong>&nbsp;&nbsp;{item.startTime}</strong>
                            <br />
                            End Date :-<strong>&nbsp;&nbsp;{item.endTime}</strong>
                          </p>
                          <h6>
                            price :-  <strong>&nbsp; ₹ {item.price}</strong>
                          </h6>
                          <div className='col-sm-12 col-md-12'><NavLink to={`/join/${item.liveClassId}`} style={{marginLeft:"25ex"}} >Join Us</NavLink></div>
                          
                        </div>
                      </div>
                      <div>
                                <pre>     </pre>
                            </div>
                            <div>
                                <pre>     </pre>
                            </div>
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

export default Package
