import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import Category from './Category';

class Filters extends React.Component {

    render() {
        const { classes, accounts, selectAccount, selectedAccount, categories, selectCategory, selectedCategories, dateOrderBy, selectDateOrder } = this.props;
        console.log(selectedAccount)
        console.log(selectedCategories)

        return (
            <Grid container >
                <Grid item xs={3}>
                    <Typography>
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
                <Grid item xs={3}>
                    <Typography>
                        Select Category
                    </Typography>
                    { categories.map(c =>  <Category key={c} category={c} selectedCategories={selectedCategories} selectCategory={selectCategory} />)}
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Order by:
                    </Typography>
                    <Typography onClick={selectDateOrder}>
                        { dateOrderBy }
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Total Balance
                    </Typography>
                    <Typography >
                        {accounts.reduce((sum, account) => (sum + account.balance), 0)}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

const styles = theme => ({
    
});

export default withStyles(styles)(Filters);