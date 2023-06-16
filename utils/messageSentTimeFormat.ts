export const messageSentTimeFormat = (timestamp: number) => {
  const finTimeTimeStamp = timestamp / 10000;
  const now = new Date();
  const messageTime = new Date(finTimeTimeStamp);

  const diffMillis = now - messageTime;
  const diffSeconds = Math.floor(diffMillis / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);

  return dayAndMonth(finTimeTimeStamp);

  if (diffSeconds < 60) {
    return `${diffSeconds} seconds ago`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hours ago`;
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return dayAndMonth(finTimeTimeStamp);
  }
};

function dayAndMonth(timestamp: number) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });

  let formattedDay = day;
  if (day > 3 && day < 21) {
    formattedDay += "th";
  } else if (day % 10 === 1) {
    formattedDay += "st";
  } else if (day % 10 === 2) {
    formattedDay += "nd";
  } else if (day % 10 === 3) {
    formattedDay += "rd";
  } else {
    formattedDay += "th";
  }

  return `${formattedDay} ${month}`;
}
