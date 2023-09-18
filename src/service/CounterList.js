import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../pages/Counter";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CounterList() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [newCounterName, setNewCounterName] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAddCounter = () => {
    const id = Date.now();
    dispatch({ type: "ADD_COUNTER", id, name: newCounterName });
    setNewCounterName("");
    setShowModal(false);
  };

  const removeCounter = (id) => {
    dispatch({ type: "REMOVE_COUNTER", id });
  };

  return (
    <div className="">
      {/* <button onClick={() => setShowModal(true)}>New Counter</button> */}
      <Button variant="outline-primary" onClick={() => setShowModal(true)}>
        New Counter
      </Button>{" "}
      <br />
      <hr />
      {counters.map((counter) => (
        <div
          key={counter.id}
          className="shadow col-md-6 col-12 mx-auto my-3 p-3"
        >
          <div className="row">
            <div className="col-10">
              <Counter id={counter.id} counterName={counter.name} />
            </div>
            <div className="col d-flex align-items-center justify-content-end">
              {" "}
              <Button
                variant="outline-danger"
                onClick={() => removeCounter(counter.id)}
              >
                X
              </Button>{" "}
            </div>
          </div>

          {/* <button onClick={() => removeCounter(counter.id)}>
            Delete Counter
          </button> */}
        </div>
      ))}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Counter Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Counter Name"
            value={newCounterName}
            onChange={(e) => setNewCounterName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCounter}>
            Add Counter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
