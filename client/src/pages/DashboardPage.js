import React from "react";
import Layout from "../containers/Layout";

function DashboardPage() {
  const dashboard = <div>This is the dashboard page</div>;

  return (
    <div>
      <Layout component={dashboard} />
    </div>
  );
}

export default DashboardPage;
