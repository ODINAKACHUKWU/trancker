import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Modal from "../containers/Modal";
import DeleteTransaction from "../containers/DeleteTransaction";
import UpdateTransaction from "../containers/UpdateTransaction";

import "../assets/stylesheets/containers/transactions.scss";
import "../assets/stylesheets/pages/transaction-page.scss";

function Transactions(props) {
  const [TotalCount, setTotalCount] = useState(0);
  const [Offset, setOffset] = useState(0);
  const [Data, setData] = useState([]);
  const [PerPage, setPerPage] = useState(15);
  let [CurrentPage, setCurrentPage] = useState(0);
  const [ItemCount, setItemCount] = useState(0);
  const [PageCount, setPageCount] = useState(0);
  const [NextPage, setNextPage] = useState(false);
  const [PreviousPage, setPreviousPage] = useState(false);
  const { transactions } = useSelector((state) => state.transaction);
  const [ShowModal, setShowModal] = useState(false);
  const [Action, setAction] = useState("");
  const [Transaction, setTransaction] = useState({});

  const showModal = (action, transaction) => {
    setAction(action);
    setTransaction(transaction);
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const pages = [];
    const pageTransactions = transactions.slice(Offset, Offset + PerPage);
    pages.push(pageTransactions);
    const totalCount = transactions.length;
    CurrentPage += 1;
    const nextPage = Offset < totalCount ? true : false;
    const previousPage = CurrentPage > 1 ? true : false;
    setTotalCount(totalCount);
    setPageCount(Math.ceil(totalCount / PerPage));
    setData(pages);
    setItemCount(pageTransactions.length);
    setCurrentPage(CurrentPage);
    setOffset(pageTransactions.length);
    setNextPage(nextPage);
    setPreviousPage(previousPage);
  }, [props.data]);

  //   componentDidMount = () => {
  //     const { fetchPlanets } = this.props;
  //     fetchPlanets("planets").then(() => {
  //       const pages = [];
  //       const { planets } = this.props;
  //       let { offset, perPage, currentPage } = this.state;
  //       const pagePlanets = planets.slice(offset, offset + perPage);
  //       pages.push(pagePlanets);
  //       const totalCount = planets.length;
  //       currentPage += 1;
  //       const nextPage = offset < totalCount ? true : false;
  //       const previousPage = currentPage > 1 ? true : false;
  //       this.setState({
  //         totalCount: totalCount,
  //         pageCount: Math.ceil(planets.length / perPage),
  //         data: pages,
  //         itemCount: pagePlanets.length,
  //         currentPage: currentPage,
  //         offset: pagePlanets.length,
  //         nextPage: nextPage,
  //         previousPage: previousPage,
  //       });
  //     });
  //   };

  //   let transactions = Data[CurrentPage - 1];
  //   console.log("-------", Data[CurrentPage - 1]);
  //   console.log("-------", CurrentPage);
  //   console.log("-------", Data);

  const element = () => {
    switch (Action) {
      case "modify":
        return <UpdateTransaction handleClose={hideModal} data={Transaction} />;
      case "delete":
        return <DeleteTransaction handleClose={hideModal} data={Transaction} />;
    }
  };

  const formatAmount = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <div className="row">
        <Modal show={ShowModal} handleClose={hideModal} component={element()} />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Payee</th>
            <th scope="col">
              Amount <span>(&#8358;)</span>
            </th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="table-row" role="button">
              <th scope="row">{transaction.payee_name}</th>
              <td>{formatAmount(transaction.amount)}</td>
              <td>{formatDate(transaction.contribution_date)}</td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => showModal("modify", transaction)}
                  className="mr-3"
                />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => showModal("delete", transaction)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row d-flex justify-content-end">
        <button role="button" className="btn btn-brown mr-3" disabled>
          {"<"}
        </button>
        <button role="button" className="btn btn-brown" disabled>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Transactions;
