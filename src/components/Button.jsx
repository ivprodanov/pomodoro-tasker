import * as React from 'react';
import Button from '@mui/material/Button';

export const ButtonComponent = ({func, text}) => {
    return <Button variant="outlined" onClick={func}>{text}</Button>
}