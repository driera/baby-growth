const formatDate = (
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

export { formatDate };
