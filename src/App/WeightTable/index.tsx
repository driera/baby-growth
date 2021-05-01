import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEvent,
  useEffect,
  useState
} from "react";
import { formatDate, useLocalStorageState } from "../../utils";
import styles from "./index.styles";

type weightListItemType = {
  id?: number;
  value: number;
  date?: number;
  poop?: boolean;
  feed?: boolean;
};

export type weightListType = weightListItemType[];

const WeightTable = (): JSX.Element => {
  const [weightList, setWeightList] = useLocalStorageState(
    "baby-weight-list",
    []
  );
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
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="weight" style={styles.weightLabel}>
          WEIGHT (in grams)
          <input
            id="weight"
            type="number"
            value={weightItem}
            onChange={handleWeightChange}
            required
            style={styles.weightInput}
          />
        </label>
        <label htmlFor="poop" style={styles.checkboxLabel}>
          <input
            type="checkbox"
            id="poop"
            onChange={handlePoopChange}
            checked={weightItemPoop}
            style={styles.checkbox}
          />
          Poop
        </label>
        <label htmlFor="feed" style={styles.checkboxLabel}>
          <input
            type="checkbox"
            id="feed"
            onChange={handleFeedChange}
            checked={weightItemFeed}
            style={styles.checkbox}
          />
          Feed
        </label>
        <button type="submit" style={styles.submit}>
          Submit weight
        </button>
      </form>

      <ul style={styles.weightGrid}>
        {weightList.map((item, index) => (
          <li key={index} style={styles.weightLine}>
            <button
              type="button"
              onClick={(e) => removeItem(e, item)}
              style={styles.removeButton}
              aria-label="Remove this line"
            >
              ×
            </button>
            <span>{item.date && formatDate(new Date(item.date), "es-ES")}</span>
            <span style={styles.weightValue}>{item.value} g</span>
            <span>
              {item.poop && `💩`} {item.feed && `🍼`}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WeightTable;
