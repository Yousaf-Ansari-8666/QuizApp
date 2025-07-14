import { NavLink } from "react-router-dom";

const Submit = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-x-hidden">
      <div className=" flex justify-center items-center h-screen">
        <div className="bg-white p-4 border-transparent rounded-xl shadow-gray-500">
          <h1 className="  font-bold text-2xl ">
            Your Quizes has been submitted successfully! 👏🏻
          </h1>

          <div className="p-4">
            <p className=" ">
              OverAll You attempted 5 quizes. Each carries 2 marks.
            </p>

            <div className="text-xl pt-4">
              To view results.{" "}
              <span>
                <NavLink to={"/result"} className="text-blue-600 hover:text-blue-800 underline cursor-pointer">
                  CLick here!
                </NavLink>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Submit;
