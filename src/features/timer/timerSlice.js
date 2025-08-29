import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    seconds: 1500,
    duration: 1500,
    isRunning: false
}

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        startTimer: (state) => {
            state.isRunning = true
        },
        stopTimer: (state) => {
            state.isRunning = false;
            state.seconds = state.duration
        },
        pauseTimer: (state) => {
            state.isRunning = false
        },
        setCustomTime: (state,action) => {
            const newDuration = action.payload;
            state.seconds = newDuration;
            state.duration = newDuration;
        },
        tick: (state) => {
            if(state.seconds > 0){
                state.seconds -= 1;
            }
        }
    }
})

export const {
    tick,
    startTimer,
    pauseTimer,
    stopTimer,
    setCustomTime
} = timerSlice.actions

export default timerSlice.reducer