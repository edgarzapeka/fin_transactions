import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const FilterContainer = props => {
    const { classes, containerSize, title, render } = props;

    return (
        <Grid item xs={containerSize} className={classes.wrapper}>
            <Typography className={classes.title}>
                { title }
            </Typography>
            { render() }
        </Grid>
    )
}

const styles = theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1em'
    },
    title: {
        fontSize: '1.5rem',
        paddingBottom: '0.5em'
    },
});

export default withStyles(styles)(FilterContainer);