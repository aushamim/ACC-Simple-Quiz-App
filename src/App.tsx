import { Provider } from "react-redux";
import "./App.css";
import Home from "./Pages/Home/Home";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}

export default App;
