import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(utc);

export default function useDaysjsRelativeTime() {
  const getRelativeTime = (utc) => dayjs(utc * 1000).fromNow();

  return getRelativeTime;
}
