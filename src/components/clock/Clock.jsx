import { useEffect, useState } from "react";

const getTimes = (date) => {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

const formateTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const time = getTimes(date);

  return (
    <div>
      <h1>Clock</h1>
      <h1>
        {formateTime(time.hours)} : {formateTime(time.minutes)} :{" "}
        {formateTime(time.seconds)}
      </h1>
    </div>
  );
};

export default Clock;
