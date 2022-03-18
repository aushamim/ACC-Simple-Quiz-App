import { useDispatch } from "react-redux";
import { getSelections } from "../../Redux/Actions/quizActions";

const Quiz = ({ quiz, finish }: { quiz: quizType; finish: boolean }) => {
  const dispatch = useDispatch();
  const selections = getSelections();
  const ans: ans[] = [
    { quesID: "q1", ans: "q1op1" },
    { quesID: "q2", ans: "q2op3" },
    { quesID: "q3", ans: "q3op2" },
    { quesID: "q4", ans: "q4op4" },
    { quesID: "q5", ans: "q5op1" },
  ];

  return (
    <div className="bg-white/70 backdrop-blur rounded-md shadow-md p-3 my-2">
      <div className="text-xl font-semibold">
        <span className="uppercase">{quiz.quesID}.&nbsp;</span>
        {quiz.ques}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2 p-2">
        {quiz.options?.map((option) => (
          <div
            key={quiz.options.indexOf(option)}
            className="flex items-center hover:text-blue-700"
          >
            <input
              type="radio"
              name={quiz.quesID}
              id={option.optionId}
              className={
                finish
                  ? quiz.options.find(
                      (option) =>
                        ans.find((e: ans) => e.quesID === quiz.quesID)?.ans ===
                        option.optionId
                    )?.option === option.option
                    ? "accent-green-600"
                    : "accent-red-600"
                  : ""
              }
              defaultChecked={
                selections.find(
                  (e: selections) =>
                    e.quesId === quiz.quesID && e.selected === option.option
                )
                  ? true
                  : false
              }
              onChange={() => {
                dispatch({
                  type: "add_selection",
                  payload: { quesId: quiz.quesID, selected: option.option },
                });
              }}
            />
            <label className="ml-2" htmlFor={option.optionId}>
              {option.option}
            </label>
          </div>
        ))}
      </div>

      {finish ? (
        <>
          <hr className="mt-2" />
          <div className="mt-2">
            ✅&nbsp;
            {
              quiz.options.find(
                (option) =>
                  ans.find((e: ans) => e.quesID === quiz.quesID)?.ans ===
                  option.optionId
              )?.option
            }
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Quiz;
