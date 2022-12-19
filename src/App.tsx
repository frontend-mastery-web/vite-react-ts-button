import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;
