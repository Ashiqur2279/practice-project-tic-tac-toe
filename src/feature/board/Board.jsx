import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Square from "../../utils/square/Square";

const Board = () => {
  const [turn, setTurn] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleMarkerClick(e) {
    const marker = e.target.textContent;
    setTurn(marker);
  }
  // board component create successfully
  // board component create successfully 2

  function handleClick(index) {
    if (!turn) {
      toast.warn("Please At First Select Your Marker");
      return;
    }

    let selectedSquare = squares.slice();
    if (turn === "X") {
      selectedSquare[index] = "X";
      setTurn("O");
    } else if (turn === "O") {
      selectedSquare[index] = "O";
      setTurn("X");
    }
    setSquares(selectedSquare);
  }

  return (
    <div className="bg-gray-400 w-full">
      <ToastContainer />
      <h1 className="my-4">Let&apos;s Play</h1>

      <div className="p-6 grid grid-cols-3 justify-items-center gap-4">
        {squares.map((square, index) => (
          <Square
            value={square}
            key={index}
            handleOnClick={() => handleClick(index)}
          />
        ))}
      </div>
      {!turn ? (
        <div className="flex flex-col justify-center">
          Select your marker:
          <div className="p-4">
            <button
              className="size-6 border border-blue-700 bg-white m-2"
              onClick={handleMarkerClick}
            >
              X
            </button>
            <button
              className="size-6 border border-blue-700 bg-red-600 m-2"
              onClick={handleMarkerClick}
            >
              O
            </button>
          </div>
        </div>
      ) : (
        `Your Marker is ${turn}`
      )}
    </div>
  );
};

export default Board;