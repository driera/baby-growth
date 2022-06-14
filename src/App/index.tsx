import React from "react";
import { formatDate, useLocalStorageState } from "../utils";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import styles from "./index.styles";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer
} from "victory";

export type itemType = {
  value: number | null;
  date: number;
  poop: boolean;
  feed: boolean;
};

const App = (): JSX.Element => {
  const [list, setList] = useLocalStorageState("baby-weight-list", []);

  const data = list.map((element, index) => {
    return {
      date: element.date, //formatDate(new Date(element.date), "ES-es"),
      value: element.value
      // label: `${formatDate(new Date(element.date), "ES-es")} - ${
      //   element.value
      // }g`
    };
  });
  console.log(list, data);

  return (
    <div style={styles.container}>
      <Header />
      <Form listState={[list, setList]} />
      <List listState={[list, setList]} />
      <VictoryChart
        width={800}
        height={200}
        theme={VictoryTheme.material}
        minDomain={{ y: 0 }}
        domainPadding={{ y: 2 }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `${formatDate(new Date(datum.date), "ES-es")} - ${datum.value}g`
            }
          />
        }
      >
        <VictoryAxis tickFormat={(x) => shortFormatDate(x)} />
        <VictoryAxis dependentAxis={true} tickFormat={(x) => `${x}g`} />
        <VictoryLine
          data={data}
          x="date"
          y="value"
          interpolation="catmullRom"
          labels={({ datum }) => datum.value}
          // labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "var(--main-color)", strokeWidth: "1" },
            labels: {
              fontSize: "7px",
              fill: "var(--main-color)"
            }
          }}
        />
        <VictoryScatter
          data={data}
          x="date"
          y="value"
          size={2}
          style={{
            data: {
              fill: "var(--main-color)",
              stroke: "var(--light-color)",
              strokeWidth: "1"
            }
          }}
        />
      </VictoryChart>
    </div>
  );
};

const shortFormatDate = (date: Date): string => {
  return new Date(date).toLocaleString("ES-es", {
    month: "short",
    day: "numeric"
  });
};

export default App;
