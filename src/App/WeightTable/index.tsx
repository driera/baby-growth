import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { formatDate } from "../../utils";

const WeightTable = (): JSX.Element => {
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

  return (
    <>
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
    </>
  );
};

export default WeightTable;
