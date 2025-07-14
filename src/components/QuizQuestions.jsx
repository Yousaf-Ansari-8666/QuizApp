import { useState, useEffect } from "react";
import { getLocalStorage } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

const QuizQuestions = ({ score, setScore, setIsQuizCompleted, setSelectedQuestions, selectedQuestions }) => {
  const quizes = getLocalStorage();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [count, setCount] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);

  const navigate = useNavigate();

  // Pick 5 random questions
  useEffect(() => {
    const shuffled = [...quizes].sort(() => 0.5 - Math.random());
    const randomFive = shuffled.slice(0, 5);
    setSelectedQuestions(randomFive);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext(); // Move automatically
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (selectedQuestions.length === 0) {
    return <div>Loading...</div>;
  }

//   console.log(score)
//   console.log(selectedQuestions)

  const currentQuestion = selectedQuestions[currentIndex];

  const handleCorrectOption = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 2);
    }

    setCount((prev) => prev + 1);

    if (currentIndex < selectedQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      // Navigate to submit page when last question finishes
      setIsQuizCompleted(true)
      navigate("/submit");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <p className="text-end text-xl font-bold">
          Time left: <span className="text-blue-800">{timeLeft} sec</span>
        </p>

        <h2 className="text-xl font-bold mb-4">
          <span>{count}. </span>
          {currentQuestion.question}
        </h2>

        <div className="flex flex-col gap-2">
          {currentQuestion.options.map((option) => (
            <label
              key={option}
              className={`flex items-center space-x-2 p-2 rounded cursor-pointer 
              ${selectedOption === option ? "bg-blue-100" : "bg-gray-100"}
              hover:bg-blue-200 transition`}
            >
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleCorrectOption(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className={`${
              !selectedOption
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            } mt-6 text-white px-4 py-2 rounded`}
            disabled={!selectedOption}
          >
            {currentIndex === selectedQuestions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
