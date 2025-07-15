import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Result = ({ score, selectedQuestions, setScore }) => {
  // console.log(selectedQuestions)
  const totalScore = selectedQuestions.length * 2;

  // console.log(totalScore)

  const status = (score / totalScore) * 100;

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <section className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className=" flex items-center justify-center flex-col">
        <h1 className=" bg-green-700 text-xl sm:text-3xl p-4 w-3/4 md:w-1/2 mt-12 mb-2 text-white border rounded-xl text-center">
          Result
        </h1>

        <div className="w-3/4 md:w-1/2 text-xl min-h-56 bg-green-50 border-transparent rounded">
          <div className="p-6 text-center">
            You got{" "}
            <span className=" text-green-700 ">
              {" "}
              {score}/{totalScore}
            </span>{" "}
            Marks.{" "}
          </div>

          <div className=" flex justify-center items-center flex-col gap-4">
            <p>
              Status :{" "}
              {status < 60 ? (
                <button className="bg-red-700 text-white p-1 px-2.5 border rounded">
                  Fail
                </button>
              ) : (
                <button className="bg-green-700 text-white p-2 border rounded">
                  Pass
                </button>
              )}
            </p>
          </div>

          <div className=" pl-8 relative ">
            <button
              onClick={handleBack}
              className=" bg-blue-500 border rounded top-10 absolute cursor-pointer p-1.5 text-white flex justify-center items-center hover:bg-blue-700"
            >
              <IoIosArrowBack /> Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
