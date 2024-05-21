import React from "react";
import Board from "../feature/board/Board";
import TurnHistory from "../feature/turnHistory/TurnHistory";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-4xl font-bold p-4">Welcome to Tic-Tac-Toe</header>
      <main className=" flex justify-center space-x-4 flex-grow">
        <Board />
        <TurnHistory />
      </main>
      <footer className="text-center py-4">
        All right reserved to &copy;Ashiqur2279
      </footer>
    </div>
  );
};

export default AppLayout;
