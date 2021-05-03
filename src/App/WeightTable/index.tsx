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
  const [weight, setWeight] = useState<string>("");
  const [poop, setPoop] = useState<boolean>(false);
  const [feed, setFeed] = useState<boolean>(false);
  const [date, setDate] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();

    if (weight === "" || isNaN(parseInt(weight))) {
      setWeight("");
      setPoop(false);
      setFeed(false);

      return;
    }

    let userDate = Date.now();

    if (date) {
      userDate = date;
    }

    if (time) {
      const userTime = time.split(":");
      userDate = new Date(userDate).setHours(
        Number(userTime[0]),
        Number(userTime[1])
      );
    }

    setWeightList([
      ...weightList,
      {
        date: userDate,
        value: parseInt(weight),
        poop: poop,
        feed: feed
      }
    ]);
    setWeight("");
    setPoop(false);
    setFeed(false);
    setDate(null);
    setTime(null);
  };

  const handleWeightChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setWeight(event.target.value);
  };

  const handlePoopChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      setPoop(true);
    } else {
      setPoop(false);
    }
  };

  const handleFeedChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      setFeed(true);
    } else {
      setFeed(false);
    }
  };

  const removeItem = (
    event: MouseEvent<HTMLButtonElement, Event>,
    item: itemType
  ): void => {
    event.preventDefault();
    setWeightList(weightList.filter((i) => i.date !== item.date));
  };

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const customDate = new Date(event.target.value);
    setDate(customDate.getTime());
  };

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTime(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="date">
          Date
          <input
            id="date"
            type="date"
            value={formatToInputDate(date ? new Date(date) : new Date())}
            onChange={handleDateChange}
          />
        </label>
        <label htmlFor="time">
          Time
          <input
            id="time"
            type="time"
            value={time ? time : formatToInputTime(new Date())}
            onChange={handleTimeChange}
          />
        </label>
        <label htmlFor="weight" style={styles.weightLabel}>
          WEIGHT (in grams)
          <input
            id="weight"
            type="number"
            value={weight}
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
            checked={poop}
            style={styles.checkbox}
          />
          Poop
        </label>
        <label htmlFor="feed" style={styles.checkboxLabel}>
          <input
            type="checkbox"
            id="feed"
            onChange={handleFeedChange}
            checked={feed}
            style={styles.checkbox}
          />
          Feed
        </label>
        <button type="submit" style={styles.submit}>
          Submit weight
        </button>
      </form>

      <ul style={styles.weightGrid}>
        {weightList
          .sort((a, b) => {
            if (!a.date || !b.date) {
              return 0;
            }
            return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
          })
          .map((item, index) => (
            <li key={index} style={styles.weightLine}>
              <button
                type="button"
                onClick={(e) => removeItem(e, item)}
                style={styles.removeButton}
                aria-label="Remove this line"
              >
                ×
              </button>
              <span>
                {item.date && formatDate(new Date(item.date), "es-ES")}
              </span>
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
