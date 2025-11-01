import { useState } from "react";
import Section1 from "./components/accordion/Section1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Section1 />
    </>
  );
}

export default App;
