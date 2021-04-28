import React, {
  ChangeEventHandler,
  CSSProperties,
  FormEventHandler,
  useState
} from "react";

const App = (): JSX.Element => {
  const [weightList, setWeightList] = useState<number[]>([]);
  const [weightItem, setWeightItem] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
    if (weightItem === "") {
      return;
    }
    console.log("handleChange");
    setWeightList([...weightList, Math.floor(parseInt(weightItem))]);
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
          <li key={index}>new entry: {item} g</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
