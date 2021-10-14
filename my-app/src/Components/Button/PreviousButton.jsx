import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin:theme.spacing(3,0,2),
    }
}))

export const PreviousButton = ({children,...props}) => {
    const styles = useStyles();
    return (
        <Button 
        className={styles.root}
        variant="contained" 
        color="primary" 
        {...props}>
        {children}
        </Button>
    )
}