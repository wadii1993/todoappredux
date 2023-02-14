import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ajout, filterTask } from "../../redux/actions";

const TacheAdd = () => {
  const { filter } = useSelector((state) => state);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Math.random(), tache: text, isdone: false };
    text.trim() === ""
      ? alert("please enter a task")
      : dispatch(ajout(newTodo));
    setText("");
  };
  return (
    <div style={{ margin: "25px" }}>
      <h1>To Do List</h1>
      <form action="" onSubmit={handlesubmit} style={{ margin: "25px" }}>
        <input
          type="text"
          value={text}
          placeholder="Add a task"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button>Ajouter</button>
      </form>
      <Button
        variant="outline-secondary"
        style={{ width: "250px" }}
        onClick={() => dispatch(filterTask())}
      >
        {filter ? "Filter/Show ALL" : "Filter/Show Uncompleted"}
      </Button>
    </div>
  );
};

export default TacheAdd;
