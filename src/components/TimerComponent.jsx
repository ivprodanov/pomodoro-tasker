import { useEffect, useState } from "react";
import { playBellSound } from "./BellSound";
import { TimerCard } from "./TimerCard";
import { formatTime } from "../helpers/formatTime";
import { useSelector, useDispatch } from 'react-redux'
import { tick, pauseTimer, stopTimer, startTimer } from '../features/timer/timerSlice'

export const TimerComponent = () => {
  const { seconds, isRunning } = useSelector((state) => state.timer)
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    if (seconds > 0 && isRunning) {
      interval = setInterval(() => {
        dispatch(tick())
      }, 1000);
    }

    if (seconds === 0 && isRunning) {
      playBellSound();
    }


    return () => clearInterval(interval);
  }, [isRunning, seconds, dispatch]);

  const startFunction = () => {
    dispatch(startTimer())
  };

  const pauseFunction = () => {
    dispatch(pauseTimer())
  };

  const stopFunction = () => {
    dispatch(stopTimer())
  };

  

  return (
    <div>
      <TimerCard
        time={formatTime(seconds)}
        startFunction={startFunction}
        stopFunction={stopFunction}
        pauseFunction={pauseFunction}
      />
      
    </div>
  );
};
