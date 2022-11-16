import React from "react";

function UserCard({ user, index }) {
  return (
    <div>
      <div className="w-[80%] h-14 m-auto text-white my-5 flex flex-row justify-center rounded-md  backdrop-blur-sm bg-opacity-70 border border-gray-00">
        <div className="w-full  ">
          <a href={`https://www.codewars.com/users/${user.username}`}>
            <ul className=" flex justify-between  ">
              <li className="ml-10">{index + 1}</li>
              <li className="text-xl max-w-[10px] ml-[-20px]">
                {user.username}
              </li>
              <li>{user.ranks.overall.score}</li>
              <li>{user.ranks.overall.name}</li>
              <li>{user.honor}</li>
              <li>{user.codeChallenges.totalCompleted}</li>
            </ul>
          </a>
        </div>
        <div
          style={{ backgroundColor: user.ranks.overall.color }}
          className=" h-auto w-2 ml-5 rounded-r-md bg-clip-padding shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-30"
        ></div>
      </div>
    </div>
  );
}

export default UserCard;
