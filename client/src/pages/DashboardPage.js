import React from "react";
import Layout from "../containers/Layout";

function DashboardPage() {
  const dashboard = (
    <div className="main">
      <h1>Dashboard</h1>
      <p>This is the dashboard page</p>
    </div>
  );

  return (
    <div>
      <Layout component={dashboard} />
    </div>
  );
}

export default DashboardPage;
