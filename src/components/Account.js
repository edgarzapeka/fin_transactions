import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Account = props => {

    return (
        <Grid item xs={12}>
          <Paper>{props.account.accountName}</Paper>
        </Grid>
    )
}

export default Account;