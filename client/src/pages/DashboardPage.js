import React from "react";
import Layout from "../containers/Layout";

function DashboardPage() {
  const dashboard = <div className="mt-5">This is the dashboard page</div>;

  return (
    <div>
      <Layout component={dashboard} />
    </div>
  );
}

export default DashboardPage;
