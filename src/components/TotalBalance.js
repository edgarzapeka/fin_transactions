import React from 'react';

import Typography from '@material-ui/core/Typography';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { withStyles } from '@material-ui/core';

const TotalBalance = props => {
    const { classes, accounts } = props;

    return (
        <Typography className={classes.money}>
            {accounts.reduce((sum, account) => (sum + account.balance), 0)}
            <AttachMoneyIcon />
        </Typography>
    )
}

const styles = theme => ({
    money: {
        fontSize: '1.5em'
    }
});

export default withStyles(styles)(TotalBalance);