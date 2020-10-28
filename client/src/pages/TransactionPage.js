import React, { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import isEmpty from "is-empty";
import Layout from "../containers/Layout";
import Modal from "../containers/Modal";
import AddContributionForm from "../containers/AddContributionForm";
import { fetchTransactions } from "../actions/creators/transactionActions";
import Transactions from "../containers/Transactions";

import "../assets/stylesheets/pages/transaction-page.scss";

function TransactionPage() {
  const [ShowModal, setShowModal] = useState(false);
  const { transaction, message } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  const showModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const addContribution = <AddContributionForm handleClose={hideModal} />;

  const transactionsComponent = (
    <Fragment>
      <div className="row mb-3">
        <h3>Transactions</h3>
        <div className="ml-auto">
          <button type="button" className="btn btn-brown mr-2">
            Download PDF
          </button>
          <button
            type="button"
            className="btn btn-brown text-dark"
            onClick={showModal}
          >
            Add Contribution
          </button>
        </div>
      </div>
      <div className="row">
        <Modal
          show={ShowModal}
          handleClose={hideModal}
          component={addContribution}
        />
      </div>
      <div className="container">
        <div className="row">
          {!isEmpty(transaction) && (
            <div className="alert alert-success">
              The transaction was successfully recorded.
            </div>
          )}
          {!isEmpty(message) && (
            <div className="alert alert-success">{message}</div>
          )}
        </div>
      </div>
      <Transactions />
    </Fragment>
  );

  return <Layout component={transactionsComponent} />;
}

export default TransactionPage;
