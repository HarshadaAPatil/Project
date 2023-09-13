export const jsQuizz = {
  questions: [
    {
      question: "Who invented Java Programming?",
      choices: ["Guido van Rossum", "James Gosling", "Dennis Ritchie", "Bjarne Stroustrup"],
      correctAns: "James Gosling",
    },
    {
      question: "Which statement is true about Java?",
      choices: ["Java is a sequence-dependent programming language", "Java is a code dependent programming language", "Java is a platform-dependent programming language", "Java is a platform-independent programming language"],
      correctAns: "Java is a platform-independent programming language",
    },
    {
      question: "Which component is used to compile, debug and execute the java programs?",
      choices: ["JRE", "JIT", "JDK", "JVM"],
      correctAns: "JDK",
    },
    {
      question: "Which of the following option leads to the portability and security of Java?",
      choices: ["Bytecode is executed by JVM", "The applet makes the Java code secure and portable", "Use of exception handling", "Dynamic binding between objects"],
      correctAns: "Bytecode is executed by the JVM",
    },
    {
      question: "Which of the following is not a Java features?",
      choices: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
      correctAns: "Use of pointers",
    },
  ],
};

export const resultInitalState={
  score:0,
  correctAnswers:0,
  wrongAnswers:0
}
