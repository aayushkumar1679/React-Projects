import { useState } from "react";
import data from "./data";

export default function Section1() {
  console.log(data);
  const [selected, setselected] = useState(null);
  const [enablemultiselection, setenablemultiselection] = useState(false);
  const [multiple, setMultple] = useState([]);
  function handlSingleSelection(getCurrentId) {
    setselected(getCurrentId == selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexofCurrentId, 1);
    setMultple(cpyMultiple);
  }
  return (
    <>
      <section className="min-h-screen flex justify-center  flex-col gap-3  items-center">
        <button
          className="bg-sky-500 w-3xs  text-white h-14 border cursor-pointer"
          onClick={() => setenablemultiselection(!enablemultiselection)}
        >
          Enable Multi Selection
        </button>
        <div className=" h-[400px] w-[1000px]  flex items-center justify-center bg-gray-200">
          <div className="flex flex-col items-center justify-center text-center">
            {data && data.length > 0 ? (
              data.map((dataItems) => (
                <div
                  className="titleandcontent  flex flex-col items-center gap-3 mb-6"
                  key={dataItems.id}
                >
                  <div
                    className="question h-9 text-white bg-slate-900 border w-[500px] text-center flex justify-center gap-3 cursor-pointer"
                    onClick={() =>
                      enablemultiselection
                        ? handleMultiSelection(dataItems.id)
                        : handlSingleSelection(dataItems.id)
                    }
                  >
                    <h3 className="text-lg font-semibold text-center">
                      {dataItems.title}
                    </h3>
                    <span className="text-xl font-bold">+</span>
                  </div>
                  {enablemultiselection
                    ? multiple.indexOf(dataItems.id) !== -1 && (
                        <div>Answer : {dataItems.content}</div>
                      )
                    : selected == dataItems.id && (
                        <div>Answer : {dataItems.content}</div>
                      )}

                  {/* {selected == dataItems.id ? (
                    <div>
                      <p className="text-gray-600  max-w-md">
                        Answer: {dataItems.content}
                      </p>
                    </div>
                  ) : (
                    <div></div>
                  )} */}
                </div>
              ))
            ) : (
              <div>no data found</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
