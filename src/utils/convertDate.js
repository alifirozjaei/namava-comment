function convertDate(dateUTC) {
  let date = new Date(
    Date.parse(
      `${dateUTC.slice(0, 4)} ${dateUTC.slice(4, 6)} ${dateUTC.slice(6, 8)}`
    )
  );

  let year = date.toLocaleDateString("fa-IR", {
    year: "numeric",
  });

  let month = date.toLocaleDateString("fa-IR", {
    month: "long",
  });

  let day = date.toLocaleDateString("fa-IR", {
    day: "numeric",
  });

  let weekday = date.toLocaleDateString("fa-IR", {
    weekday: "long",
  });

  return `${weekday} ${day} ${month} ${year}`;
}

export default convertDate;
