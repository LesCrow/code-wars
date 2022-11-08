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
          "bg-white w-1/2 m-auto mt-5 mb-5 flex justify-center  text-left shadow-xl rounded-lg "
        }
      >
        {index + 1 === 1 && (
          <div className="w-10 h-10 text-4xl text-[#ffd700]">{index + 1}</div>
        )}
        {index + 1 === 2 && (
          <div className="w-10 h-10 text-4xl text-[#C0C0C0]">{index + 1}</div>
        )}
        {index + 1 === 3 && (
          <div className="w-10 h-10 text-4xl text-[#614e1a]">{index + 1}</div>
        )}
        {index + 1 > 3 && <div className="w-10 h-10 text-3xl">{index + 1}</div>}

        <ul>
          <li className="text-2xl">{user.username}</li>
          <li>{user.ranks.overall.name}</li>
          <li>Clan : {user.clan}</li>
          <li>Score : {user.ranks.overall.score}</li>
          <li>Honor : {user.honor} points</li>
          <li>Challenges completed : {user.codeChallenges.totalCompleted}</li>
        </ul>
        <div
          style={{ backgroundColor: user.ranks.overall.color }}
          className={"border h-auto w-6 ml-5"}
        ></div>
      </div>
    </motion.div>
  );
}

export default UserCard;
