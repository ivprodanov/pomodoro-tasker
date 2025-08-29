import { Box, Paper, Typography, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

export const TaskComponent = ({ task, onToggle, onDelete }) => {
  return (
    <Box m={2}>
      <Paper elevation={task.isCompleted ? 1 : 3}>
        <Box
          p={2}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
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
            <Typography variant='body1' fontWeight={700} mr={2}>
              {task.pomodoros}
            </Typography>
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