// import { createSlice } from "@reduxjs/toolkit";
// import { getLocalStorage } from "../utils/LocalStorage";

// const { quizes } = getLocalStorage();

// const initialState = {
//   questions: quizes || [],
//   score: 0,
//   currentQuestionIndex: 0,
// };

// const quizSlice = createSlice({
//   initialState,
//   name: "quiz",
//   reducers: {
//     nextQuestion: (state) => {
//       if (state.currentQuestionIndex < state.questions.length - 1) {
//         state.currentQuestionIndex += 1;
//       }
//     },

//     incrementScore: (state) => {
//       state.score += 1;
//     },

//     resetQuiz: (state) => {
//       state.currentQuestionIndex = 0;
//       state.score = 0;
//     },
//   },
// });

// export const { nextQuestion, incrementScore, resetQuiz } = quizSlice.actions;
// export default quizSlice.reducer;
