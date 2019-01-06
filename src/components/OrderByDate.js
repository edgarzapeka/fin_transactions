import React from 'react';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core';

const OrderByDate = props => {
    const { classes, selectDateOrder, dateOrderBy } = props;

    return (
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
    )
}

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

export default withStyles(styles)(OrderByDate);