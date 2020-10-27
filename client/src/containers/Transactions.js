import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";

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

  const handleClick = () => {
    console.log("+++++++ this button was clicked");
  };

  useEffect(() => {
    const pages = [];
    const pageTransactions = props.data.slice(Offset, Offset + PerPage);
    pages.push(pageTransactions);
    const totalCount = props.data.length;
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

  let transactions = Data[CurrentPage - 1];
  console.log("-------", Data[CurrentPage - 1]);
  console.log("-------", CurrentPage);
  console.log("-------", Data);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Payee</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((transaction) => (
            <tr key={transaction.id} className="table-row" role="button">
              <th scope="row">{transaction.payee_name}</th>
              <td>{transaction.amount}</td>
              <td>{transaction.contribution_date}</td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={handleClick}
                  className="mr-3"
                />
                <FontAwesomeIcon icon={faTrashAlt} onClick={handleClick} />
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
