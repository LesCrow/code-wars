import React from "react";

function UserCard({ user, index }) {
  console.log("render");
  return (
    <div>
      <div
        className={
          index === 0
            ? "w-1/2 m-auto text-white my-5 flex justify-center  text-left shadow-xl h-full bg-yellow-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-00"
            : index === 1
            ? "w-1/2 m-auto text-white my-5 flex justify-center  text-left shadow-xl h-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-00"
            : index === 2
            ? "w-1/2 m-auto text-white my-5 flex justify-center  text-left shadow-xl h-full bg-amber-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-grey-00"
            : "w-1/2 m-auto text-white my-5 flex justify-center  text-left shadow-xl h-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-00"
        }
      >
        {index + 1 === 1 && (
          <div className="w-10 h-10  text-4xl text-[#ffd700]"></div>
        )}
        {index + 1 === 2 && (
          <div className="w-10 h-10 text-4xl text-[#C0C0C0]"></div>
        )}
        {index + 1 === 3 && (
          <div className="w-10 h-10 text-4xl text-[#614e1a]"></div>
        )}
        {index + 1 > 3 && <div className="w-10 h-10 text-3xl">{index + 1}</div>}

        <a href={`https://www.codewars.com/users/${user.username}`}>
          <ul>
            <li className="text-2xl">{user.username}</li>
            <li>{user.ranks.overall.name}</li>
            <li>Clan : {user.clan}</li>
            <li>Score : {user.ranks.overall.score}</li>
            <li>Honor : {user.honor} points</li>
            <li>Challenges completed : {user.codeChallenges.totalCompleted}</li>
          </ul>
        </a>
        <div
          style={{ backgroundColor: user.ranks.overall.color }}
          className="border h-auto w-6 ml-5 rounded-md bg-clip-padding shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30"
        ></div>
      </div>
    </div>
  );
}

export default UserCard;
