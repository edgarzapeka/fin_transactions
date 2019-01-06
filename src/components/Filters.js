import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import CategoryList from './CategoryList';
import OrderByDate from './OrderByDate';
import SelectAccount from './SelectAccount';

class Filters extends React.Component {

    render() {
        const { classes, accounts, selectAccount, selectedAccount, categories, selectCategory, selectedCategories, dateOrderBy, selectDateOrder } = this.props;

        return (
            <Grid container>
                <SelectAccount accounts={accounts} selectAccount={selectAccount} selectedAccount={selectedAccount} />
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
});

export default withStyles(styles)(Filters);