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
    poop?: boolean;
    feed?: boolean;
  };

  const [weightList, setWeightList] = useState<weightListItemType[]>([]);
  const [weightItem, setWeightItem] = useState<string>("");
  const [weightItemPoop, setWeightItemPoop] = useState<boolean>(false);
  const [weightItemFeed, setWeightItemFeed] = useState<boolean>(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();

    if (weightItem === "" || isNaN(parseInt(weightItem))) {
      setWeightItem("");
      setWeightItemPoop(false);
      setWeightItemFeed(false);

      return;
    }

    setWeightList([
      ...weightList,
      {
        date: Date.now(),
        value: parseInt(weightItem),
        poop: weightItemPoop,
        feed: weightItemFeed
      }
    ]);
    setWeightItem("");
    setWeightItemPoop(false);
    setWeightItemFeed(false);
  };

  const handleWeightChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeightItem(event.target.value);
  };

  const handlePoopChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      setWeightItemPoop(true);
    } else {
      setWeightItemPoop(false);
    }
  };

  const handleFeedChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      setWeightItemFeed(true);
    } else {
      setWeightItemFeed(false);
    }
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
          value={weightItem}
          onChange={handleWeightChange}
          required
        />
        <label htmlFor="poop">
          <input
            type="checkbox"
            id="poop"
            onChange={handlePoopChange}
            checked={weightItemPoop}
          />
          Poop
        </label>
        <label htmlFor="feed">
          <input
            type="checkbox"
            id="feed"
            onChange={handleFeedChange}
            checked={weightItemFeed}
          />
          Feed
        </label>
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
            {item.value} g {(item.poop || item.feed) && " - "}
            {item.poop && `💩`} {item.feed && `🍼`}
          </li>
        ))}
      </ul>
    </>
  );
};

export default WeightTable;
