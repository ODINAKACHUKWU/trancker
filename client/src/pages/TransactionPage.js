import React from "react";
import Layout from "../containers/Layout";

function TransactionPage() {
  const transactions = <div>This is the transaction page</div>;

  return (
    <div>
      <Layout component={transactions} />
    </div>
  );
}

export default TransactionPage;
