import React from "react";
import "../LeaderBoard.css";

function LeaderBoard() {
  return (
    <div className="bg-leaderBoard h-32 bg-fill flex justify-center items-center">
      <h1
        class="leader"
        className="text-white text-lg font-bold h-14 w-96  justify-center items-center flex bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600"
      >
        LEADERBOARD
      </h1>
    </div>
  );
}

export default LeaderBoard;
