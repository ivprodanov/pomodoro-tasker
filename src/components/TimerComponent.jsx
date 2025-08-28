import { useEffect, useState } from "react";
import { playBellSound } from "./BellSound";
import { TimerCard } from "./TimerCard";
import { formatTime } from "../helpers/formatTime";

export const TimerComponent = () => {
  const [timer, setTimer] = useState({
    secondsLeft: 1500,
    isActive: false,
  });

  useEffect(() => {
    let interval = null;

    if (timer.isActive && timer.secondsLeft > 0) {
      interval = setInterval(() => {
        setTimer((prev) => ({
          ...prev,
          secondsLeft: prev.secondsLeft - 1,
        }));
      }, 1000);
    }

    if (timer.secondsLeft === 0) {
      playBellSound();
    }

    console.log(timer.secondsLeft);

    return () => clearInterval(interval);
  }, [timer.secondsLeft, timer.isActive]);

  const startFunction = () => {
    setTimer({
      secondsLeft: 3,
      isActive: true,
    });
  };

  const pauseFunction = () => {
    setTimer((prev) => ({
      ...prev,
      isActive: !prev.isActive,
    }));
  };

  const stopFunction = () => {
    setTimer({
      secondsLeft: 0,
      isActive: false,
    });
  };

  

  return (
    <div>
      <TimerCard
        time={formatTime(timer.secondsLeft)}
        startFunction={startFunction}
        stopFunction={stopFunction}
        pauseFunction={pauseFunction}
      />
      
    </div>
  );
};
