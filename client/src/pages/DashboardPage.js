import React from "react";
import Layout from "../containers/Layout";

function DashboardPage() {
  const dashboard = (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard page</p>
    </div>
  );

  return <Layout component={dashboard} />;
}

export default DashboardPage;
