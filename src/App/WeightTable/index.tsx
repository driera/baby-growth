import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEvent,
  useEffect,
  useState
} from "react";
import {
  formatDate,
  formatToInputDate,
  formatToInputTime,
  useLocalStorageState
} from "../../utils";
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
  const [weightDate, setWeightDate] = useState<number | null>(null);
  const [weightTime, setWeightTime] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();

    if (weightItem === "" || isNaN(parseInt(weightItem))) {
      setWeightItem("");
      setWeightItemPoop(false);
      setWeightItemFeed(false);

      return;
    }

    let userDate = Date.now();

    if (weightDate) {
      userDate = weightDate;
    }

    if (weightTime) {
      const time = weightTime.split(":");
      userDate = new Date(userDate).setHours(Number(time[0]), Number(time[1]));
    }

    setWeightList([
      ...weightList,
      {
        date: userDate,
        value: parseInt(weightItem),
        poop: weightItemPoop,
        feed: weightItemFeed
      }
    ]);
    setWeightItem("");
    setWeightItemPoop(false);
    setWeightItemFeed(false);
    setWeightDate(null);
    setWeightTime(null);
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

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const customDate = new Date(event.target.value);
    setWeightDate(customDate.getTime());
  };

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeightTime(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="date">
          Date
          <input
            id="date"
            type="date"
            value={formatToInputDate(
              weightDate ? new Date(weightDate) : new Date()
            )}
            onChange={handleDateChange}
          />
        </label>
        <label htmlFor="time">
          Time
          <input
            id="time"
            type="time"
            value={weightTime ? weightTime : formatToInputTime(new Date())}
            onChange={handleTimeChange}
          />
        </label>
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
