import { createContext, useState, useEffect } from "react";

const TimerCountdown = createContext({
  secunds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
  updateSeconds: (newSeconds) => {},
  updateMinutes: (newMinutes) => {},
  updateHours: (newHours) => {},
  updateDays: (newDays) => {},
});

export function TimerCountdownProvider(props) {
  const [secondsState, setSecondsState] = useState(0);
  const [minutesState, setMinutesState] = useState(0);
  const [hoursState, setHoursState] = useState(0);
  const [daysState, setDaysState] = useState(0);

  function updSeconds(secondsData) {
    setSecondsState((prevSecondsData) => {
      return secondsData;
    });
  }

  function updMinutes(minutesData) {
    setMinutesState((prevMinutesData) => {
      return minutesData;
    });
  }

  function updHours(hoursData) {
    setHoursState((prevHoursData) => {
      return hoursData;
    });
  }

  function updDays(daysData) {
    setDaysState((prevDaysData) => {
      return daysData;
    });
  }

  useEffect(() => {
    function flipAllCards(time) {
      const seconds = time % 60;
      const minutes = Math.floor(time / 60) % 60;
      const hours = Math.floor(time / 3600) % 24;
      const days = Math.floor(time / 86400);
      return { seconds, minutes, hours, days };
    }

    const endDate = new Date("2023-11-24T15:30:00");
    endDate.setDate(endDate.getDate());
    let previousTimeBetweenDates;
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((endDate - currentDate) / 1000);

      let secs;
      let mins;
      let hrs;
      let ds;
      if (previousTimeBetweenDates !== timeBetweenDates) {
        const { seconds, minutes, hours, days } =
          flipAllCards(timeBetweenDates);
        updSeconds(seconds);
        secs = seconds;
        updMinutes(minutes);
        mins = minutes;
        updHours(hours);
        hrs = hours;
        updDays(days);
        ds = days;
      }

      previousTimeBetweenDates = timeBetweenDates;

      if (secs === 0 && mins === 0 && hrs === 0 && ds === 0) {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const context = {
    seconds: secondsState,
    minutes: minutesState,
    hours: hoursState,
    days: daysState,
    updateSeconds: updSeconds,
    updateMinutes: updMinutes,
    updateHours: updHours,
    updateDays: updDays,
  };

  return (
    <TimerCountdown.Provider value={context}>
      {props.children}
    </TimerCountdown.Provider>
  );
}

export default TimerCountdown;
