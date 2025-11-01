import { useState } from "react";
import Section1 from "./components/accordion/Section1";
import RandomColor from "./components/changecolor/Section1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Section1 />

      <RandomColor />
    </>
  );
}

export default App;
