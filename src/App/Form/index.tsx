import React, {
  ChangeEventHandler,
  FormEventHandler,
  SetStateAction,
  useState
} from "react";
import { itemType } from "..";
import { formatToInputDate, formatToInputTime } from "../../utils";
import styles from "./index.styles";

type props = {
  listState: [itemType[], React.Dispatch<SetStateAction<itemType[]>>];
};

const Form = ({ listState }: props): JSX.Element => {
  const [list, setList] = listState;
  const [item, setItem] = useState<itemType>({
    value: null,
    date: Date.now(),
    poop: false,
    feed: false
  });

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

  const handleDateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const time = event.target.value.split("-");
    const date = new Date(item.date).setFullYear(
      Number(time[0]),
      Number(time[1]) - 1,
      Number(time[2])
    );

    setItem({
      ...item,
      date
    });
  };

  const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const time = event.target.value.split(":");
    const date = new Date(item.date).setHours(Number(time[0]), Number(time[1]));

    setItem({
      ...item,
      date
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

  return (
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
  );
};

export default Form;
