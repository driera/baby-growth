import React, { MouseEvent, SetStateAction } from "react";
import { itemType } from "..";
import { formatDate } from "../../utils";
import styles from "./index.styles";
import { ReactComponent as WeightIcon } from "../../assets/icons/weight.svg";

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
    <div style={styles.container}>
      <ul style={styles.grid}>
        {list
          .sort((a, b) => {
            if (!a.date || !b.date) {
              return 0;
            }
            return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
          })
          .map((item, index) => (
            <li key={index} style={styles.line}>
              <button
                type="button"
                onClick={(e) => removeItem(e, item)}
                style={styles.removeButton}
                aria-label="Remove this line"
              >
                ×
              </button>
              <div style={styles.icon}>
                <WeightIcon role="img" style={styles.iconImage} />
              </div>
              <div style={styles.content}>
                <div style={styles.contentLabel}>Date</div>
                <div style={styles.contentData}>
                  {item.date && formatDate(new Date(item.date), "es-ES")}
                </div>
              </div>
              <div style={styles.content}>
                <div style={styles.contentLabel}>Weight</div>
                <div style={styles.value}>
                  {item.value}
                  <span style={styles.unit}>g</span>
                </div>
              </div>
              <div style={styles.content}>
                {(item.poop || item.feed) && (
                  <div style={styles.contentLabel}>Details</div>
                )}
                <div style={styles.contentData}>
                  {item.poop && (
                    <span role="img" aria-label="poop">
                      💩
                    </span>
                  )}{" "}
                  {item.feed && (
                    <span role="img" aria-label="feed">
                      🍼
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
