import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EditTache } from "../../redux/actions";
const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [etxt, setEtxt] = useState(task.tache);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const EtidedTask = { id: task.id, tache: etxt, isdone: task.isdone };
    dispatch(EditTache(EtidedTask));
    handleClose();
  };

  return (
    <div>
      <Button variant="success" style={{ width: "100px" }} onClick={handleShow}>
        Modifier
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEdit}>
            <input
              type="text"
              value={etxt}
              onChange={(e) => setEtxt(e.target.value)}
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditTask;
