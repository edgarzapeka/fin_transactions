import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core';

const SelectAccount = props => {
    const { classes, selectedAccount, selectAccount, accounts } = props;

    return (
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
    )
}

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(SelectAccount);