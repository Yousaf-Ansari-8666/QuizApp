import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  // window.location.reload()

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to the Quiz App!
        </h1>
        <p className="text-gray-600 mb-8">
          Test your knowledge and challenge yourself with fun quizzes.
        </p>

        <NavLink
          to="/quiz"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md"
        >
          Start Quiz
        </NavLink>

        <div className="mt-8 text-gray-500 text-sm">
          🚀 Let's see how many answers you get right!
        </div>
      </div>
    </div>
  );
};

export default Home;
