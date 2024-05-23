import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Board from "../feature/board/Board";
import TurnHistory from "../feature/turnHistory/TurnHistory";
import calculateWinner from "../utils/calculateWinner/CalculateWinner";

const AppLayout = () => {
  const [turn, setTurn] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [marker, setMarker] = useState(null);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const lastPlayer = calculateWinner(squares);
    if (lastPlayer) {
      toast.success(`${lastPlayer} won the match`);
      setWinner(true);
    }
  }, [squares]);

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
    if (winner) {
      toast.info(
        `The Game is Finished. If you want to play again - press the Reset button`
      );
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

  function handleReset() {
    setTurn(null);
    setSquares(Array(9).fill(null));
    setMarker(null);
    setWinner(false);
    return;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-4xl font-bold p-4">Welcome to Tic-Tac-Toe</header>
      <main>
        <div className=" flex justify-center space-x-4 flex-grow">
          <Board
            turn={turn}
            squares={squares}
            marker={marker}
            handleClick={handleClick}
            handleMarkerClick={handleMarkerClick}
          />
          <TurnHistory />
        </div>
        <div>
          {winner && (
            <button
              className="border border-orange-400 py-1 px-2"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </main>

      <footer className="text-center py-4">
        All right reserved to &copy;Ashiqur2279
      </footer>
    </div>
  );
};

export default AppLayout;
