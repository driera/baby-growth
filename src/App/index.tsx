import React from "react";
import { useLocalStorageState } from "../utils";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

export type itemType = {
  value: number | null;
  date: number;
  poop: boolean;
  feed: boolean;
};

const App = (): JSX.Element => {
  const [list, setList] = useLocalStorageState("baby-weight-list", []);

  return (
    <React.Fragment>
      <Header />
      <Form listState={[list, setList]} />
      <List listState={[list, setList]} />
    </React.Fragment>
  );
};

export default App;
