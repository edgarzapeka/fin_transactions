import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { withStyles } from '@material-ui/core';

const TotalBalance = props => {
    const { classes, accounts } = props;

    return (
        <Grid item xs={4} className={classes.wrapper}>
            <Typography className={classes.title}>
                Total Balance
            </Typography>
            <Typography className={classes.money}>
                {accounts.reduce((sum, account) => (sum + account.balance), 0)}
                <AttachMoneyIcon />
            </Typography>
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
    money: {
        fontSize: '1.5em'
    }
});

export default withStyles(styles)(TotalBalance);