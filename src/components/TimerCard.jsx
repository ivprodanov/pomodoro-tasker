import { Box, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonComponent } from "./Button";
import { TaskComponent } from "./TaskComponent";
import { TaskForm } from "./TaskForm";

// This helper can now just save the entire array
const saveTasksToStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const TimerCard = ({
  time,
  startFunction,
  stopFunction,
  pauseFunction,
}) => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on initial render
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || "[]");
        setTasks(storedTasks);

    }, []);

    // This function will handle adding a new task
    const handleAddTask = (newTask) => {
        // Create the new array of tasks
        const updatedTasks = [...tasks, newTask];
        
        // 1. Update the component's state so the UI rerenders immediately
        setTasks(updatedTasks);
        
        // 2. Save the entire new array to localStorage
        saveTasksToStorage(updatedTasks);
    };

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
      {tasks && tasks.filter(task => task).map((task) => (
        <TaskComponent 
            key={task.id} 
            taskTitle={task.title} 
            taskDetails={task.details} 
            pomodoros={task.pomodoros}
        />
      ))}

      {/* Pass the new handler function to the form */}
      <TaskForm onAddTask={handleAddTask}/>
    </Card>
  );
};