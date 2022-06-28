export function convertTimeStamp(timeStamp) {
  const date = new Date(timeStamp * 1000);

  const weekday = date
    .toLocaleDateString("en", { weekday: "short" })
    .replace(".", "");
  const year = date.toLocaleDateString("en", { year: "numeric" });
  const month = date
    .toLocaleDateString("en", { month: "short" })
    .replace(".", "");
  const dateDay = date.getDate();
  return {
    weekday: weekday,
    year: year,
    month: month,
    date: dateDay,
    fullDate: `${weekday}, ${dateDay} ${month} ${year}`,
  };
}
