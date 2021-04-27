import React, { ChangeEventHandler, CSSProperties, useState } from "react";

const App = (): JSX.Element => {
  const [weightList, setWeightList] = useState<number[]>([]);
  const [weightItem, setWeightItem] = useState<string>("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setWeightList([...weightList, Math.floor(parseInt(weightItem))]);
    setWeightItem("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const val = event.target.value;
    if (val === "") {
      return;
    }
    setWeightItem(val);
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

      <div>
        <label htmlFor="weight">Weight in grams</label>
        <input
          id="weight"
          type="text"
          value={weightItem}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit weight</button>
      </div>

      <ul>
        {weightList.map((item, index) => (
          <li key={index}>new entry: {item} g</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
