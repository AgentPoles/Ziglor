import React from "react";
import PersonPart from "./PersonPart";
import TransactionList from "./TransactionList";

const index = () => {
  return (
    <div>
      <PersonPart />
      <div style={{ marginTop: "30px" }}>
        <TransactionList />
      </div>
    </div>
  );
};

export default index;
