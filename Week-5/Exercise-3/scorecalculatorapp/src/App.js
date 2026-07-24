import "./App.css";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Steeve"
        school="Greenwood High"
        total={450}
        goal={500}
      />
    </div>
  );
}

export default App;
