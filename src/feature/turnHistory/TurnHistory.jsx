import React from "react";

const TurnHistory = ({ history }) => {
  return (
    <div className="bg-orange-300 w-full">
      <h2 className="my-4 text-2xl font-semibold underline">Turn History</h2>
      <ol>
        {history.map((turnHistory, index) => (
          // console.log(move);
          <li key={index}>
            {history.length > 1 && index > 0 ? (
              <button className="border rounded border-black p-1 m-1 bg-lime-500 font-semibold">
                Go to move no {index}
              </button>
            ) : (
              // <button className="border rounded border-black p-1 m-1 bg-lime-500 font-semibold">
              //   Let's start the game
              // </button>
              <span className="text-lg my-1 font-semibold">
                {history.length > 1
                  ? `Let's review the previous move:`
                  : `Let's start the Game`}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TurnHistory;
