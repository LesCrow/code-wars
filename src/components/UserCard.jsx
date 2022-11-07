import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function UserCard({ user, index }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      transition={{ delay: 0 + index * 0.05 }}
      animate={{ opacity: 1, scale: inView ? 1 : 0 }}
      initial={{ opacity: 0, scale: 0 }}
    >
      <div
        className={
          "bg-white w-1/2 m-auto mt-5 mb-5 flex justify-between item text-left rounded-3xl shadow-[inset_-6px_6px_#b5b5b3]"
        }
      >
        {index + 1 === 1 && (
          <div className="text-[#FFD700] text-6xl ml-5 mt-10">{index + 1}</div>
        )}
        {index + 1 === 2 && (
          <div className="text-[#C0C0C0] text-6xl ml-5 mt-10">{index + 1}</div>
        )}
        {index + 1 === 3 && (
          <div className="text-[#614e1a]  text-6xl ml-5 mt-10">{index + 1}</div>
        )}
        {index + 1 > 3 && (
          <div className="text-5xl ml-5 mt-10">{index + 1}</div>
        )}

        <a href={`https://www.codewars.com/users/${user.username}`}>
          <ul>
            <li className="text-2xl">{user.username}</li>
            <li>{user.ranks.overall.name}</li>
            <li>Score : {user.ranks.overall.score} points</li>
            <li>Honor : {user.honor} points</li>

            <li>Challenges completed: {user.codeChallenges.totalCompleted}</li>
            <li>Clan : {user.clan}</li>
          </ul>
        </a>
        <div
          style={{ backgroundColor: user.ranks.overall.color }}
          className={"border h-auto w-6 ml-5 rounded-r-3xl"}
        ></div>
      </div>
    </motion.div>
  );
}

export default UserCard;
