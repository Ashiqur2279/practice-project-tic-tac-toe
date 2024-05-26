import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Square from "../../utils/square/Square";

const Board = ({
  turn,
  squares,
  marker,
  handleClick,
  handleMarkerClick,
  winner,
}) => {
  return (
    <div className="bg-gray-400 w-full flex flex-col">
      <ToastContainer />
      <h1 className="my-4 text-2xl font-semibold underline">Let&apos;s Play</h1>

      <div className="grid grid-cols-3 justify-items-center size-50 my-4 mx-auto">
        {squares.map((square, index) => (
          <Square
            value={square}
            key={index}
            handleOnClick={() => handleClick(index)}
          />
        ))}
      </div>
      {winner ? (
        <p className="text-lg font-semibold bg-green-600 p-1 my-2">
          {winner} Has won the match
        </p>
      ) : !turn ? (
        <div className="flex flex-col justify-center">
          <p className="text-lg font-semibold bg-green-600 p-1">
            Select Your Marker:
          </p>
          <div className="p-2">
            <button
              className="size-12 border rounded border-blue-700 bg-white m-2 text-lg font-bold"
              onClick={handleMarkerClick}
            >
              X
            </button>
            <button
              className="size-12 border rounded border-blue-700 bg-red-600 m-2 text-lg font-bold"
              onClick={handleMarkerClick}
            >
              O
            </button>
          </div>
        </div>
      ) : marker === turn ? (
        <p
          className={`text-lg font-semibold ${
            turn === "X" ? "bg-white" : "bg-red-600"
          } p-1 my-2`}
        >
          Player 1 turn is {turn}
        </p>
      ) : (
        <p
          className={`text-lg font-semibold ${
            turn === "O" ? "bg-red-600" : "bg-white"
          } p-1 my-2`}
        >
          Player 2 turn is {turn}
        </p>
      )}
    </div>
  );
};

export default Board;
