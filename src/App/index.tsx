import React, {
  ChangeEventHandler,
  CSSProperties,
  FormEventHandler,
  useState
} from "react";
import { formatDate } from "../utils";

const App = (): JSX.Element => {
  type weightListItemType = {
    id?: number;
    value: number;
    date?: Date;
  };

  const [weightList, setWeightList] = useState<weightListItemType[]>([]);
  const [weightItem, setWeightItem] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();

    if (weightItem === "" || isNaN(parseInt(weightItem))) {
      setWeightItem("");

      return;
    }

    setWeightList([
      ...weightList,
      { date: new Date(Date.now()), value: parseInt(weightItem) }
    ]);
    setWeightItem("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeightItem(event.target.value);
  };

  const headerStyles: CSSProperties = {
    padding: "20px 0"
  };

  const titleStyles: CSSProperties = {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold"
  };

  return (
    <div>
      <header style={headerStyles}>
        <h1 style={titleStyles}>Baby weight progression</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">Weight in grams</label>
        <input
          id="weight"
          type="text"
          value={weightItem}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit weight</button>
      </form>

      <ul>
        {weightList.map((item, index) => (
          <li key={index}>
            {item.date && formatDate(item.date, "es-ES")}
            {" - "}
            {item.value} g
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
