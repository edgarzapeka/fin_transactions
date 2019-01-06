import React from 'react';

import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import CategoryList from './CategoryList';
import OrderByDate from './OrderByDate';
import SelectAccount from './SelectAccount';
import TotalBalance from './TotalBalance';

class Filters extends React.Component {

    render() {
        const { classes, accounts, selectAccount, selectedAccount, categories, selectCategory, selectedCategories, dateOrderBy, selectDateOrder } = this.props;

        return (
            <Grid container>
                <SelectAccount accounts={accounts} selectAccount={selectAccount} selectedAccount={selectedAccount} />
                <OrderByDate dateOrderBy={dateOrderBy} selectDateOrder={selectDateOrder} />
                <TotalBalance accounts={accounts} />
                <CategoryList  categories={categories} selectedCategories={selectedCategories} selectCategory={selectCategory}/>
            </Grid>
        )
    }
}

const styles = theme => ({
});

export default withStyles(styles)(Filters);