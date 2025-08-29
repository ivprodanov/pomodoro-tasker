import React from 'react';
import { Box, TextField, Button } from '@mui/material';

export const TaskForm = ({ onAddTask }) => {
  const handleSubmit = (event) => {
    // 1. Prevent the default browser page reload
    event.preventDefault();

    // 2. Get the form data
    const title = event.target.elements.title.value;
    const details = event.target.elements.details.value;

    // 3. Basic validation
    if (!title) {
      alert('Please enter a task title.');
      return;
    }

    // 4. Create the new task object
    const newTask = {
      taskId: crypto.randomUUID(),
      title,
      details,
      isCompleted: false,
      pomodoros: 1,
    };

    // 5. Call the parent function with the new task
    onAddTask(newTask);

    // 6. Clear the form fields
    event.target.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2, // Spacing between fields
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: '500px',
        margin: '2rem auto', // Center the form
      }}
    >
      <TextField
        name="title"
        label="Task Title"
        variant="outlined"
        required
        fullWidth
      />
      <TextField
        name="details"
        label="Details (optional)"
        variant="outlined"
        multiline
        rows={3}
        fullWidth
      />
      <Button type="submit" variant="contained" size="large">
        Add Task
      </Button>
    </Box>
  );
};