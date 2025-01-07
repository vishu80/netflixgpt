import Body from "./Components/Body";
import { Provider } from "react-redux";
import Appstore from "./utlis/store";
function App() {
  return (
    <Provider store={Appstore}>
      <Body />
    </Provider>
  );
}

export default App;
