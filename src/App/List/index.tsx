import React, { MouseEvent, SetStateAction } from "react";
import { itemType } from "..";
import { formatDate } from "../../utils";
import styles from "./index.styles";

type props = {
  listState: [itemType[], React.Dispatch<SetStateAction<itemType[]>>];
};

const List = ({ listState }: props): JSX.Element => {
  const [list, setList] = listState;

  const removeItem = (
    event: MouseEvent<HTMLButtonElement, Event>,
    item: itemType
  ): void => {
    event.preventDefault();
    setList(list.filter((i) => i.date !== item.date));
  };

  return (
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
            <span>{item.date && formatDate(new Date(item.date), "es-ES")}</span>
            <span style={styles.weightValue}>{item.value} g</span>
            <span>
              {item.poop && `💩`} {item.feed && `🍼`}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default List;
