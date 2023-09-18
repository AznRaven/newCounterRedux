
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter({ id, counterName }) {
    const counter = useSelector((state) =>
      state.counters.find((c) => c.id === id)
    );
    const dispatch = useDispatch();
  
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <h1 className="">{counterName}</h1>
          </div>
          <div className="row">
            <h2>Count: {counter.value}</h2>
          </div>
          <div className="flex-row d-flex mx-auto">
            <div className="mx-auto">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => dispatch({ type: "INCREMENT", id })}
              >
                +
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => dispatch({ type: "RESET", id })}
              >
                reset
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => dispatch({ type: "DECREMENT", id })}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  