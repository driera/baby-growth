import { SetStateAction, useEffect, useRef, useState } from "react";
import { weightListType } from "../App/WeightTable";

export const formatDate = (
  date: Date,
  locales: string | string[] = window.navigator.languages as string[]
): string => {
  return date.toLocaleString(locales, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23"
  });
};

export const formatToInputDate = (weightDate: Date): string => {
  const d = new Date(weightDate);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const useLocalStorageState = (
  key: string,
  defaultValue: unknown = "",
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [
  state: weightListType,
  setState: React.Dispatch<SetStateAction<weightListType>>
] => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};
