import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonComponent } from "./Button";
import { TaskComponent } from "./TaskComponent";
import { TaskForm } from "./TaskForm";
import { selectAllTasks, toggleTaskCompletion, taskDeleted, taskAdded } from "../features/tasks/taskSlice";
import { useDispatch, useSelector } from "react-redux";


export const TimerCard = ({
  time,
  startFunction,
  stopFunction,
  pauseFunction,
}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks)

    const handleAddTask = (newTask) => {
      dispatch(taskAdded(newTask))
    }

    const handleDeleteTask = (taskId) => {
      dispatch(taskDeleted(taskId))
    }

    const handleToggleComplete = (taskId) => {
      dispatch(toggleTaskCompletion(taskId))
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h3" fontWeight={500} align="center">
          {time}
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
          <ButtonComponent text={"Start"} func={startFunction} />
          <ButtonComponent text={"Pause"} func={pauseFunction} />
          <ButtonComponent text={"Stop"} func={stopFunction} />
        </Box>
      </CardContent>

      {/* Filter added as a safeguard, and a unique key is added */}
      {tasks.map((task) => (
        <TaskComponent
          key={task.taskId}
          task={task}
          onDelete={() => handleDeleteTask(task.taskId)}
          onToggle={() => handleToggleComplete(task.taskId)}
        />
      ))}

      {/* Pass the new handler function to the form */}
      <TaskForm onAddTask={handleAddTask}/>
    </Card>
  );
};