import { Box, Paper, Typography, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add, Remove } from '@mui/icons-material';
import React from 'react';

export const TaskComponent = ({ task, onToggle, onDelete, onAddPomodoros, onRemovePomodoros }) => {
  return (
    <Box m={2}>
      <Paper elevation={task.isCompleted ? 1 : 3}>
        <Box
          p={2}
        >
          <Box>
            <Typography
              variant='h5'
              fontWeight={500}
              sx={{
                textDecoration: task.isCompleted ? 'line-through' : 'none',
                color: task.isCompleted ? 'text.secondary' : 'text.primary',
              }}
            >
              {task.title}
            </Typography>
            <Typography variant='body2' color="text.secondary">
              {task.details}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={onRemovePomodoros} aria-label="delete task">
              <Remove />
            </IconButton>
            <Typography variant='body1' fontWeight={700}>
              {task.pomodoros}
            </Typography>
            <IconButton onClick={onAddPomodoros} aria-label="delete task">
              <Add />
            </IconButton>
            <Checkbox
              checked={task.isCompleted}
              onChange={onToggle}
            />
            <IconButton onClick={onDelete} aria-label="delete task">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};