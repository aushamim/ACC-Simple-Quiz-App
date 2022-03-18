import { useEffect, useState } from "react";
import Quiz from "../../Components/Quiz/Quiz";
import { getQuiz, resetQuiz } from "../../Redux/Actions/quizActions";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    fetch("quiz.json")
      .then((response) => response.json())
      .then((data) => setQuiz(data));
  }, []);

  const setQuizToLocalStorage = () => {
    localStorage.setItem("quiz", JSON.stringify(quiz));
    setStart(true);
  };

  return (
    <div className="py-10 w-9/12 lg:w-2/5 mx-auto">
      <div className="bg-white/70 backdrop-blur rounded-md p-5 shadow-md text-4xl font-semibold text-center">
        Quiz Time
      </div>
      {start === true || getQuiz().length !== 0 ? (
        ""
      ) : (
        <div className="mt-5">
          <button
            className="w-full bg-blue-200/30 backdrop-blur hover:bg-blue-200 p-2 rounded-md shadow-md uppercase font-semibold transition ease-in-out duration-500"
            onClick={() => {
              setQuizToLocalStorage();
            }}
          >
            Start
          </button>
        </div>
      )}
      {start === true || getQuiz().length !== 0 ? (
        <>
          {quiz.map((x) => (
            <div key={quiz.indexOf(x)} className="mt-5">
              <Quiz quiz={x} finish={finish}></Quiz>
            </div>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-5">
            <button
              className="w-full bg-red-200/30 backdrop-blur hover:bg-red-200 p-2 rounded-md shadow-md uppercase font-semibold transition ease-in-out duration-500"
              onClick={() => resetQuiz()}
            >
              Reset
            </button>
            <button
              className="w-full bg-blue-200/30 backdrop-blur hover:bg-blue-200 p-2 rounded-md shadow-md uppercase font-semibold transition ease-in-out duration-500"
              onClick={() => setFinish(true)}
            >
              Finish
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
