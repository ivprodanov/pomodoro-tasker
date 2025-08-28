import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

export const TaskComponent = ({taskTitle, taskDetails, pomodoros, isCompleted}) => {
  return (
    <Box m={3}>
    <Paper elevation={isCompleted ? 0 : 3}>
        <Box m={3} p={2}>
            <Typography variant='h5' fontWeight={500}>
                {taskTitle}
            </Typography>
            <Typography variant='p'>
                {taskDetails}
            </Typography>
            <Typography variant='body1'>{pomodoros}</Typography>
        </Box>
    </Paper>
    </Box>
  )
}
