import React from 'react';

import Grid from '@material-ui/core/Grid';
import Transaction from './Transaction';

const TransactionList = props => {

        return (
            <Grid item md={12}>
                { props.transactions.map(t => <Transaction key={t.transactionId} transaction={t} />) }
            </Grid>
        )
};

export default TransactionList;