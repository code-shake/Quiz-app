// import React, { useState } from "react";

// export default function Questions(props) {
//   console.log(props.filterQus);

//   const questions = [
//     questions.map((item) => {
//       questionText: {
//         item.question;
//       }
//       answerOption: [
//         {
//           answerText: item.options.map((items) => item),
//           isCorrect: item.answer,
//         },
//       ];
//     }),
//   ];

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);

//   const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect === answerText) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };
//   return (
//     <div className="wrapper">
//       {showScore ? (
//         <div>
//           You scored {score} out of {questions.length}
//         </div>
//       ) : (
//         <>
//           <div>
//             <div>
//               <span>Question {currentQuestion + 1}</span>/{questions.length}
//             </div>
//             <div>{questions[currentQuestion].questionText}</div>
//           </div>
//           <div className="homeChoose">
//             {questions[currentQuestion].answerOptions.map((answerOption) => (
//               <button
//                 onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
//               >
//                 {answerOption.answerText}
//               </button>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
