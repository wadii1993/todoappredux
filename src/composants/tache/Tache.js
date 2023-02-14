import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { completetask, deletetask } from "../../redux/actions";
import EditTask from "../edittask/EditTask";

const Tache = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        margin: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 id={task.isdone ? "comp" : "unc"}>{task.tache}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "400px",
        }}
      >
        <Button
          variant="danger"
          style={{ width: "100px" }}
          onClick={() => dispatch(deletetask(task.id))}
        >
          delete
        </Button>
        <Button
          variant="primary"
          style={{ width: "100px" }}
          onClick={() => dispatch(completetask(task.id))}
        >
          {task.isdone ? "undo" : "complete"}
        </Button>
        <EditTask task={task} />
      </div>
    </div>
  );
};

export default Tache;
