import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEvent,
  useEffect,
  useState
} from "react";
import { formatDate } from "../../utils";

const WeightTable = (): JSX.Element => {
  type weightListItemType = {
    id?: number;
    value: number;
    date?: number;
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
      { date: Date.now(), value: parseInt(weightItem) }
    ]);
    setWeightItem("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeightItem(event.target.value);
  };

  const removeItem = (
    event: MouseEvent<HTMLButtonElement, Event>,
    item: weightListItemType
  ): void => {
    event.preventDefault();
    setWeightList(weightList.filter((i) => i.date !== item.date));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">Weight in grams</label>
        <input
          id="weight"
          type="number"
          value={Number(weightItem).toString()}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit weight</button>
      </form>

      <ul>
        {weightList.map((item, index) => (
          <li key={index}>
            <button type="button" onClick={(e) => removeItem(e, item)}>
              X
            </button>{" "}
            {item.date && formatDate(new Date(item.date), "es-ES")}
            {" - "}
            {item.value} g
          </li>
        ))}
      </ul>
    </>
  );
};

export default WeightTable;
