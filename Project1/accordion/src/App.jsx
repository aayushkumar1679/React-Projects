import { useState } from "react";
import Section1 from "./components/accordion/Section1";
import RandomColor from "./components/changecolor/Section1";
import StarRating from "./components/starRating/Section1";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Section1 />

      <RandomColor /> */}
      <StarRating noofstar={10} />
    </>
  );
}

export default App;
