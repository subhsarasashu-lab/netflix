
import { Provider } from "react-redux";
import Body from "./components/Body.js";
import Store from "./utils/Store.js";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
