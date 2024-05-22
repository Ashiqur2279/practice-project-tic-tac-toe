import React, { useState } from "react";
import { toast } from "react-toastify";
import Board from "../feature/board/Board";
import TurnHistory from "../feature/turnHistory/TurnHistory";

const AppLayout = () => {
  const [turn, setTurn] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [marker, setMarker] = useState(null);

  function handleMarkerClick(e) {
    const marker = e.target.textContent;
    setTurn(marker);
    setMarker(marker);
  }

  function handleClick(index) {
    if (!turn) {
      toast.warn("Please At First Select Your Marker");
      return;
    }

    let selectedSquare = squares.slice();

    if (selectedSquare[index]) {
      toast.info("Already clicked");
      return;
    }

    selectedSquare[index] = turn;
    setTurn(turn === "X" ? "O" : "X");

    // if (turn === "X") {
    //   selectedSquare[index] = "X";
    //   setTurn("O");
    // } else if (turn === "O") {
    //   selectedSquare[index] = "O";
    //   setTurn("X");
    // }
    setSquares(selectedSquare);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-4xl font-bold p-4">Welcome to Tic-Tac-Toe</header>

      <main className=" flex justify-center space-x-4 flex-grow">
        <Board
          turn={turn}
          squares={squares}
          marker={marker}
          handleClick={handleClick}
          handleMarkerClick={handleMarkerClick}
        />
        <TurnHistory />
      </main>

      <footer className="text-center py-4">
        All right reserved to &copy;Ashiqur2279
      </footer>
    </div>
  );
};

export default AppLayout;
