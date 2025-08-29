import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');


const tasksAdapter = createEntityAdapter({
    selectId: (task) => task.taskId,
    sortComparer: (a, b) => a.title.localeCompare(b.title)
})

const initialState = tasksAdapter.setAll(tasksAdapter.getInitialState(), storedTasks);

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded: tasksAdapter.addOne,
        taskUpdated: tasksAdapter.updateOne,
        taskDeleted: tasksAdapter.removeOne,
        toggleTaskCompletion: (state, action) => {
          const taskId = action.payload;
          const task = state.entities[taskId];
          if (task) {
            task.isCompleted = !task.isCompleted;
          }
        },
        addTaskPomodoros: (state, action) => {
            const {id, amount} = action.payload;
            const task = state.entities[id];
            if(task, amount > 0) {
                task.pomodoros = (task.pomodoros || 0) + amount
            }
        }
    }
}) 


export const {
  taskAdded,
  taskUpdated,
  taskDeleted,
  toggleTaskCompletion,
  addTaskPomodoros,
} = taskSlice.actions;

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors((state) => state.tasks);

export default taskSlice.reducer;