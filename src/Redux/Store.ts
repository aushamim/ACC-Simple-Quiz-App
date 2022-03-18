import { createStore } from "redux";
import quizReducer from "./Reducer/quizReducer";

const store = createStore(quizReducer);

export default store;
