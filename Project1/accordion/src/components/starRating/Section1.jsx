import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noofstar = 5 }) {
  const [rating, Setrating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentId) {
    Setrating(getCurrentId);
  }
  function handleMouseEnter(getCurrentId) {
    setHover(getCurrentId);
  }
  function handleMouseLeave(getCurrentId) {
    Setrating(hover);
  }
  return (
    <>
      <div className="min-h-screen items-center flex flex-row justify-center">
        {[...Array(noofstar)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              className={`cursor-pointer ${
                index <= (hover || rating)
                  ? "active text-yellow-500"
                  : "inactive"
              }`}
              key={index}
              size={40}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            />
          );
        })}
      </div>
    </>
  );
}
