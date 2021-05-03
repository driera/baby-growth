import React, {
  ChangeEventHandler,
  FormEventHandler,
  MouseEvent,
  useEffect,
  useRef,
  useState
} from "react";
import {
  formatDate,
  formatToInputDate,
  formatToInputTime,
  useLocalStorageState
} from "../../utils";
import styles from "./index.styles";

export type itemType = {
  value: number | null;
  date: number;
  poop: boolean;
  feed: boolean;
};

const WeightTable = (): JSX.Element => {
  const [list, setList] = useLocalStorageState("baby-weight-list", []);

  const [item, setItem] = useState<itemType>({
    value: null,
    date: Date.now(),
    poop: false,
    feed: false
  });

  const timeRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();

    if (item.value) {
      setList([...list, item]);
    }

    setItem({
      value: null,
      date: Date.now(),
      poop: false,
      feed: false
    });
  };

  const handleWeightChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const weight = event.target.value;
    setItem({ ...item, value: weight ? parseInt(weight) : null });
  };

  const handlePoopChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let poop = false;
    if (event.target.checked) {
      poop = true;
    }

    setItem({ ...item, poop });
  };

  const handleFeedChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let feed = false;
    if (event.target.checked) {
      feed = true;
    }

    setItem({ ...item, feed });
  };

  const removeItem = (
    event: MouseEvent<HTMLButtonElement, Event>,
    item: itemType
  ): void => {
    event.preventDefault();
    setList(list.filter((i) => i.date !== item.date));
  };

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const time = timeRef.current?.value || formatToInputTime(new Date());
    const date = new Date(event.target.value).setHours(
      Number(time.split(":")[0]),
      Number(time.split(":")[1])
    );

    setItem({
      ...item,
      date
    });
  };

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const time = event.target.value;
    const date = new Date(item.date).setHours(
      Number(time.split(":")[0]),
      Number(time.split(":")[1])
    );

    setItem({
      ...item,
      date
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="date">
          Date
          <input
            id="date"
            type="date"
            value={formatToInputDate(new Date(item.date))}
            onChange={handleDateChange}
          />
        </label>
        <label htmlFor="time">
          Time
          <input
            id="time"
            type="time"
            ref={timeRef}
            value={formatToInputTime(new Date(item.date))}
            onChange={handleTimeChange}
          />
        </label>
        <label htmlFor="weight" style={styles.weightLabel}>
          WEIGHT (in grams)
          <input
            id="weight"
            type="number"
            value={item.value ?? ""}
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
            checked={item.poop}
            style={styles.checkbox}
          />
          Poop
        </label>
        <label htmlFor="feed" style={styles.checkboxLabel}>
          <input
            type="checkbox"
            id="feed"
            onChange={handleFeedChange}
            checked={item.feed}
            style={styles.checkbox}
          />
          Feed
        </label>
        <button type="submit" style={styles.submit}>
          Submit weight
        </button>
      </form>

      <ul style={styles.weightGrid}>
        {list
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
