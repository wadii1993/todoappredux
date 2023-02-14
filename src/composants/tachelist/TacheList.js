import React from "react";
import { useSelector } from "react-redux";
import Tache from "../tache/Tache";

const TacheList = () => {
  const { tasks, filter } = useSelector((state) => state);
  return (
    <div>
      {filter
        ? tasks
            .filter((el) => el.isdone === false)
            .map((el) => <Tache key={el.id} task={el} />)
        : tasks.map((el) => <Tache key={el.id} task={el} />)}
    </div>
  );
};

export default TacheList;
