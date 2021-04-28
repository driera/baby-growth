import React from "react";
import PageHeader from "./PageHeader";
import WeightTable from "./WeightTable";

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <PageHeader />
      <WeightTable />
    </React.Fragment>
  );
};

export default App;
