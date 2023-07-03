export default function AboutUs() {
  return (
    <>
      <div className="row justify-content-center align-items-center p-5 bg-info-subtle" style={{height:"auto"}}>
        <div>
          <h1 className="col-12" style={{ textAlign: "center" }}>
            About Us
          </h1>
        </div>
        <div>
          <h4 className="col-12" style={{ textAlign: "start" }}>
            <p>
              At Quizee, we believe that learning can be enjoyable, and that's
              why we've curated a wide range of quiz categories to suit every
              interest and expertise. Whether you're a history buff, a science
              enthusiast, a pop culture guru, or a sports fanatic, we have
              quizzes that will pique your curiosity and keep you coming back
              for more.
            </p>
            <p>
              Our team of experts has meticulously crafted each quiz to ensure a
              perfect balance of entertainment and education. You'll find
              thought-provoking questions that will make you scratch your head,
              fascinating facts that will expand your knowledge, and intriguing
              trivia that will leave you wanting to learn even more. Quizee is
              not just about answering questions correctly; it's about the
              thrill of competition and the joy of discovering new information.
              Challenge your friends and family to see who can achieve the
              highest score or compete against other Quizee users from around
              the world on our leaderboard. Show off your expertise and earn
              badges as you progress through various quiz levels.
            </p>
          </h4>
        </div>
      
      </div>
      
      <h2 className="bg-info-subtle mb-0" style={{ textAlign: "center" }}>Our Team<hr style={{border: "2px solid blue"}}/></h2>
      
      <div className="row bg-warning-subtle mt-0">
        <div className="col-md-4 col-sm-12">
          <h6>
            <div className=" bg-warning p-3 text-center">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.dk4LxSqVvGaASCXxZW3p3wAAAA&pid=Api&P=0&h=180"
                alt="Akshay"
                style={{ width: "90%" }}
              />
              <div className="container row mt-4" style={{height:"10rem"}}>
                <div className="row"><h2>Akshay Gadekar</h2></div>
                <p className="row">PRN No:- </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
                {/* <!-- <p><button className="button">Contact</button></p> --> */}
              </div>
            </div>
          </h6>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className=" bg-warning p-3 text-center">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.wd9-92-Dw4SVYpzqZMtCvwHaHa&pid=Api&P=0&h=180"
              alt="Harshada"
              style={{ width: "90%" }}
            />
            <div className="container row mt-4" style={{height:"10rem"}}>
              <h2 className="row">Harshada Patil</h2>
              <p className="row">PRN NO:- </p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
              {/* <!-- <p><button className="button">Contact</button></p> --> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className=" bg-warning p-3 text-center" style={{height:""}}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.GIX5K_H6IcDTpUBcApSiEQHaHa&pid=Api&P=0&h=180"
              alt="Yashashree"
              style={{ width: "90%" }}
            />
            <div className="container row mt-4" style={{height:"10rem"}}>
              <h2 className="row">Yashashree Gohad</h2>
              <p className="row">PRN No:- </p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              {/* <!-- <p><button className="button">Contact</button></p> --> */}
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
}
