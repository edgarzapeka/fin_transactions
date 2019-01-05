import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Transaction from './Transaction';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const TransactionList = props => {
        const { classes } = props;

        return (
            <Grid item md={12} className={classes.transactionsContainer}>
                {props.transactions.length !== 0 ? (
                    props.transactions.map(t => <Transaction key={t.transactionId} transaction={t} />)
                ) : (
                    <Grid item md={12}>
                        <Paper >
                            <Typography>
                                You don't have any transacitons
                            </Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        )
};

const styles = theme => ({
    noTransactions: {
        textAlign: 'center',
        padding: '2em'
    }
});

export default withStyles(styles)(TransactionList);