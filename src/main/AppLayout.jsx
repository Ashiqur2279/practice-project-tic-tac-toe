import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Board from "../feature/board/Board";
import TurnHistory from "../feature/turnHistory/TurnHistory";
import calculateWinner from "../utils/calculateWinner/CalculateWinner";

const AppLayout = () => {
  const [turn, setTurn] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [marker, setMarker] = useState(null);
  const [winner, setWinner] = useState(null);
  const [noWinner, setNoWinner] = useState(false);
  const [history, setHistory] = useState([squares]); //set the squares in a array

  useEffect(() => {
    // the code is for checking is there any winner or not. it's connected with reset btn.
    const lastPlayer = calculateWinner(squares);
    if (lastPlayer) {
      toast.success(`${lastPlayer} won the match`);
      setWinner(lastPlayer);
    } else {
      const isTie = squares.every((square) => square !== null);
      if (isTie) {
        setNoWinner(true);
        toast.info(`The game is tie. Please press the Reset button`);
      }
    }
  }, [squares]);

  // console.log(`squares`, squares);

  function handleMarkerClick(e) {
    //code for the first player marker selection
    const marker = e.target.textContent;
    setTurn(marker);
    setMarker(marker);
  }

  function handleClick(index) {
    //code for update or clicking functionalities on any single square
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
    setHistory([...history, selectedSquare]);
  }

  function handleMove(numOfMove) {
    //the function is moving to the previous move
    setSquares(history[numOfMove]);
    setTurn(numOfMove % 2 === 0 ? marker : marker === "X" ? "O" : "X");
  }

  function handleReset() {
    //code for reset all state
    setTurn(null);
    setSquares(Array(9).fill(null));
    setMarker(null);
    setWinner(false);
    setHistory([squares]);
    return;
  }

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <header className="text-4xl font-bold p-4">Welcome to Tic-Tac-Toe</header>

      <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <Board
          turn={turn}
          squares={squares}
          marker={marker}
          handleClick={handleClick}
          handleMarkerClick={handleMarkerClick}
          winner={winner}
        />
        <TurnHistory history={history} onHandleMove={handleMove} />
      </main>

      <div>
        {(winner || noWinner) && (
          <button
            className="border rounded border-orange-400 py-1 px-2 my-4 bg-yellow-400 text-xl font-semibold"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>

      <footer className="text-center py-4">
        All right reserved to &copy;Ashiqur2279
      </footer>
    </div>
  );
};

export default AppLayout;
