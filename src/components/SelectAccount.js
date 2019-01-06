import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';

const SelectAccount = props => {
    const { classes, selectedAccount, selectAccount, accounts } = props;

    return (
        <Grid item xs={4} className={classes.wrapper}>
            <Typography className={classes.title}>
                Select Account
            </Typography>
            <Select
                value={selectedAccount}
                onChange={selectAccount}
                displayEmpty
                name="age"
                className={classes.selectEmpty}
            >
                <MenuItem value={""}>
                <em>All</em>
                </MenuItem>
                { accounts.map(a => <MenuItem value={a.accountId} key={a.accountId}> {a.accountName} </MenuItem>) }
            </Select>
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
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(SelectAccount);