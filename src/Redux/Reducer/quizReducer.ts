import { getSelections } from "../Actions/quizActions";

function quizReducer(quiz: any, action: payloadType) {
  switch (action.type) {
    case "add_selection":
      const selections = getSelections();
      const z = selections.find(
        (e: selections) => e.quesId === action.payload.quesId
      );
      if (!z) {
        const newSelections = [...selections, action.payload];
        localStorage.setItem("selections", JSON.stringify(newSelections));
      } else {
        selections[
          selections.findIndex(
            (z: selections) => z.quesId === action.payload.quesId
          )
        ].selected = action.payload.selected;
        localStorage.setItem("selections", JSON.stringify(selections));
      }
      break;

    default:
      break;
  }
}

export default quizReducer;
