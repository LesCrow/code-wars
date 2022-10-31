import React from "react";

function UserCard({ user }) {
  console.log(user.ranks.overall.color);
  return (
    <div
      className={
        "bg-" +
        user.ranks.overall.color +
        "-500  border flex justify-center text-center "
      }
    >
      <ul>
        <li className="text-2xl">{user.username}</li>
        <li>{user.ranks.overall.name}</li>
        <li>Clan: {user.clan}</li>
        <li>Honor: {user.honor} points</li>
        {/* <li>Rank: {user.ranks.overall.rank}</li>
        <li>Color: {user.ranks.overall.color}</li> */}
        <li>Score: {user.ranks.overall.score}</li>
        <li>Challenges completed: {user.codeChallenges.totalCompleted}</li>
      </ul>
    </div>
  );
}

export default UserCard;
