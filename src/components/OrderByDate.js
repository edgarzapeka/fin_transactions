import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { withStyles } from '@material-ui/core';

const OrderByDate = props => {
    const { classes, selectDateOrder, dateOrderBy } = props;

    return (
        <Grid item xs={4} className={classes.wrapper}>
            <Typography className={classes.title}>
                Order by
            </Typography>
            <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
                onClick={selectDateOrder}
            >
                { dateOrderBy === 'recent' ? (
                    <ArrowUpwardIcon className={classes.extendedIcon} />
                ) : (
                    <ArrowDownwardIcon className={classes.extendedIcon} />
                )}
                { dateOrderBy }
            </Fab>
        </Grid>
    )
}

const styles = theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: '1.5rem',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

export default withStyles(styles)(OrderByDate);