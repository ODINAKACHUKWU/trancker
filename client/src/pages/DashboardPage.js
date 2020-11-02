import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "is-empty";
import Layout from "../containers/Layout";
import Summary from "../containers/Summary";
import { fetchReport } from "../actions/creators/transactionActions";
import DataSection from "../containers/DataSection";

import "../assets/stylesheets/pages/dashboard-page.scss";

function DashboardPage() {
  const { report, transaction } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    let year = new Date().getFullYear();
    if (isEmpty(report)) dispatch(fetchReport(year, 5));
  });

  useEffect(() => {
    let year = new Date().getFullYear();
    dispatch(fetchReport(year, 5));
  }, [transaction]);

  const dashboard = (
    <Fragment>
      <h3 className="mb-5">Dashboard</h3>
      <Summary />
      <DataSection />
    </Fragment>
  );

  return <Layout component={dashboard} />;
}

export default DashboardPage;
