import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TacheAdd from "./composants/ajouttache/TacheAdd";
import TacheList from "./composants/tachelist/TacheList";

const App = () => {
  return (
    <div className="App">
      <TacheAdd />
      <TacheList />
    </div>
  );
};

export default App;
