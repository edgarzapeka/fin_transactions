import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import CategoryList from './CategoryList';
import OrderByDate from './OrderByDate';

class Filters extends React.Component {

    render() {
        const { classes, accounts, selectAccount, selectedAccount, categories, selectCategory, selectedCategories, dateOrderBy, selectDateOrder } = this.props;

        return (
            <Grid container className={classes.filtersContainer}>
                <Grid item xs={4}>
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
                <OrderByDate dateOrderBy={dateOrderBy} selectDateOrder={selectDateOrder} />
                <Grid item xs={4}>
                    <Typography>
                        Total Balance
                    </Typography>
                    <Typography >
                        {accounts.reduce((sum, account) => (sum + account.balance), 0)}
                    </Typography>
                </Grid>
                <CategoryList  categories={categories} selectedCategories={selectedCategories} selectCategory={selectCategory}/>
            </Grid>
        )
    }
}

const styles = theme => ({
    filtersContainer:{
        padding: '1em'   
    },
    button: {
        margin: theme.spacing.unit,
      },
});

export default withStyles(styles)(Filters);