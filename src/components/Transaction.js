import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';

const Transaction = props => {
    const { classes, transaction } = props;

    return (
        <Grid item md={12} className={classes.transactionContainer}>
          <Paper className={classes.transaction}>{transaction.description}</Paper>
        </Grid>
    )
}

const styles = theme => ({
    transactionContainer: {
        margin: '0.5em'
    },
    transaction: {
        padding: '1em'
    },
});

export default withStyles(styles)(Transaction);