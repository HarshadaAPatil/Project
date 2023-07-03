import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { resultInitalState } from "./constants";
import "./qz.css";

const Que = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAns } = questions[currentQuestion];

  //check ans
  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAns) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onTryAgain=()=>{
    setResult(resultInitalState);
    setShowResult(false);

  }

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };
  return (
    <>
      <div
        className=""
        style={{
          fontFamily: "monospace",
          background: "linear-gradient(0deg,#150080,0.03%,#d08642)",
          color: "#000000",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto auto 0",
          padding: "0 30px",
          height: "auto",
        }}
      >
        {!showResult ? (
          <div
            style={{
              width: "500px",
              background: "#ffffff",
              borderRadius: "4px",
              marginTop: "70px",
              padding: "30px",
              marginBottom:"30px",
              boxSizing: "border-box",
              height: "auto",
            }}
          >
            <>
              <span
                className=""
                style={{
                  fontSize: "32px",
                  fontWeight: "500",
                  color: "#150080",
                }}
              >
                {currentQuestion + 1}
              </span>
              <span
                className="total-question"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#9c9c9c",
                }}
              >
                /{questions.length}
              </span>
              <h2 style={{ fontSize: "20px", fontWeight: "500", margin: "0" }}>
                {question}
              </h2>
              <ul style={{ marginTop: "20px", marginLeft: "-40px" }}>
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerClick(answer, index)}
                    key={answer}
                    className={
                      answerIdx === index ? "bg-success fs-3 text-light" : null
                    }
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                      color: "#2d264b",
                      fontSize: "16px",
                      background: "#ffffff",
                      border: "1px solid #9c9c9c",
                      borderRadius: "16px",
                      padding: "11px",
                      marginTop: "15px",
                      cursor: "pointer",
                    }}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="text-center" onClick={onClickNext}>
                <button className="btn" disabled={answerIdx === null}>
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </>
          </div>
        ) : (
            <div
            style={{
              textAlign:"center",
              width: "500px",
              background: "#ffffff",
              borderRadius: "4px",
              marginTop: "70px",
              padding: "30px",
              marginBottom:"30px",
              boxSizing: "border-box",
              height: "auto",
            }}
          >
          <div style={{background:""}}>
            <h3 style={{fontSize:"38px",margin:"rem"}} className="title">Result</h3>
            <span style={{marginTop:"1rem", fontFamily:"cursive", fontWeight:"1000",fontSize:"16px",color:"navy"  }}>
               Total Questions : <span>{questions.length}</span>
               </span>
            <p style={{marginTop:"1rem", fontFamily:"cursive", fontWeight:"1000",fontSize:"19px",color:"green"  }}>
               <span style={{marginTop:"1rem", fontFamily:"cursive", fontWeight:"1000",fontSize:"19px",color:"green",textAlign:"start",padding:"1rem"  }}> Correct Answers : <span>{result.correctAnswers}</span>
               </span><span style={{marginTop:"1rem", fontFamily:"cursive", fontWeight:"1000",fontSize:"19px",color:"red",textAlign:"end",padding:"1rem"  }}>
             Wrong Answers : <span>{result.wrongAnswers}</span></span>
            </p>
            <p style={{marginTop:"1rem", textAlign:"center" }}>
               <span  className="title">
               Total Score : <span>{result.score}</span>
               </span>
            </p>
            
            <Link to={"/home"} style={{flex:"0.1", textDecoration:"none", color:"white"}}><button className="btn" id="sign-up-btn text-light" >
          Back to home
        </button></Link>
          </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Que;
