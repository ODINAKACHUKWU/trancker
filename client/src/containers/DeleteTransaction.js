import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTransaction,
  fetchTransactions,
} from "../actions/creators/transactionActions";

import "../assets/stylesheets/containers/delete-transaction.scss";

function DeleteTransaction(props) {
  const { error, message } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message === "Transaction was deleted successfully.") {
      dispatch(fetchTransactions());
      props.handleClose();
    }
  }, [message]);

  const handleClick = (id) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div>
      <h4 className="text-center mb-3">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="exclamation mr-3"
        />
        Delete
      </h4>
      <div className="mb-2">
        <span className="font-weight-bold mr-3">Payee:</span>
        {props.data.payee_name}
      </div>
      <div className="mb-2">
        <span className="font-weight-bold mr-3"> Contribution Date:</span>
        {props.data.contribution_date}
      </div>
      <div className="mb-2">
        <span className="font-weight-bold mr-3"> Amount:</span>
        <span>&#8358;</span>
        {props.data.amount}
      </div>
      {props.data.memo && (
        <div className="mb-2">
          <span className="font-weight-bold mr-3"> Memo:</span>
          {props.data.memo}
        </div>
      )}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mt-2">
        <button
          type="button"
          className="btn btn-brown mr-2"
          onClick={props.handleClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleClick(props.data.id)}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default DeleteTransaction;
