import { useEffect, useState } from "react";
import QuizQuestions from "./components/QuizQuestions";
import { setLocalStorage } from "./utils/LocalStorage";
import Submit from "./components/Submit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./components/Result";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // localStorage.clear()
  useEffect(() => {
    setLocalStorage();
  }, []);

  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/quiz",
          element: (
            <QuizQuestions
              score={score}
              setScore={setScore}
              setIsQuizCompleted={setIsQuizCompleted}
              selectedQuestions={selectedQuestions}
              setSelectedQuestions={setSelectedQuestions}
            />
          ),
        },

        {
          path: "/submit",
          element: (
            <ProtectedRoute isAllowed={isQuizCompleted}>
              <Submit score={score}  />
            </ProtectedRoute>
          ),
        },

        {
          path: "/result",
          element: (
            <ProtectedRoute isAllowed={isQuizCompleted}>
              <Result score={score} selectedQuestions={selectedQuestions} setScore={setScore}/>
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
