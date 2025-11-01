import { useState } from "react";

export default function RandomColor() {
  const [typeofcolor, Settypeofcolor] = useState("hex");
  console.log(typeofcolor);
  const [color, Setcolor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function createRandomhexcolor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
      Setcolor(hexColor);
    }
    console.log(hexColor);
  }

  function createRandomrgbcolor() {
    // rgb(250, 250, 250);
    // let r = Math.floor(Math.random() * 250);
    // let g = Math.floor(Math.random() * 250);
    // let b = Math.floor(Math.random() * 250);
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    Setcolor(rgbColor);
    console.log(rgbColor);
  }
  return (
    <>
      <div
        style={{
          background: color,
        }}
        className="min-h-screen  lg:flex lg:flex-col justify-center items-center"
      >
        <div className="buttonwrapper flex flex-row justify-center gap-5">
          <button
            onClick={() => Settypeofcolor("hex")}
            className="rounded-md text-white h-8 w-[200px] cursor-pointer hover:drop-shadow-2xl hover:scale-105 bg-sky-500 "
          >
            Generate Hex Color
          </button>
          <button
            onClick={() => Settypeofcolor("rgb")}
            className="rounded-md text-white h-8 w-[200px] cursor-pointer hover:drop-shadow-2xl hover:scale-105 bg-sky-500 "
          >
            Generate Rgb Color
          </button>
          <button
            onClick={() =>
              typeofcolor === "hex"
                ? createRandomhexcolor()
                : createRandomrgbcolor()
            }
            className="rounded-md text-white h-8 w-[200px] cursor-pointer hover:drop-shadow-2xl hover:scale-105 bg-sky-500 "
          >
            Generate Random Color
          </button>
        </div>
        {typeofcolor === "hex" ? (
          <p className="text-white text-5xl mt-5">
            {" "}
            Random Color Hex Selected : {color}
          </p>
        ) : (
          <p className="text-white text-5xl mt-5">
            Random Color Rgb Selected : {color}
          </p>
        )}
      </div>
    </>
  );
}
