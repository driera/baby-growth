import React from "react";
import { useLocalStorageState } from "../utils";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import styles from "./index.styles";

export type itemType = {
  value: number | null;
  date: number;
  poop: boolean;
  feed: boolean;
};

const App = (): JSX.Element => {
  const [list, setList] = useLocalStorageState("baby-weight-list", []);

  return (
    <div style={styles.container}>
      <Header />
      <Form listState={[list, setList]} />
      <List listState={[list, setList]} />
    </div>
  );
};

export default App;
