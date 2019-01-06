import React from 'react';

import Grid from '@material-ui/core/Grid';

import CategoryList from './CategoryList';
import OrderByDate from './OrderByDate';
import SelectAccount from './SelectAccount';
import TotalBalance from './TotalBalance';
import FilterContainer from './FilterContainer';

class Filters extends React.Component {

    render() {
        const { 
            accounts, 
            selectAccount, 
            selectedAccount, 
            categories, 
            selectCategory, 
            selectedCategories, 
            dateOrderBy, 
            selectDateOrder 
        } = this.props;

        return (
            <Grid container>
                <FilterContainer containerSize={4} title={'Select Account'} render={() => (
                    <SelectAccount accounts={accounts} selectAccount={selectAccount} selectedAccount={selectedAccount} />
                )} />
                <FilterContainer containerSize={4} title={'Order By'} render={() => (
                    <OrderByDate dateOrderBy={dateOrderBy} selectDateOrder={selectDateOrder} />
                )} />
                <FilterContainer containerSize={4} title={'Total Balance'} render={() => (
                    <TotalBalance accounts={accounts} />    
                )} />
                <FilterContainer containerSize={12} title={'Select Categories'} render={() => (
                    <CategoryList  categories={categories} selectedCategories={selectedCategories} selectCategory={selectCategory}/>
                )} />
            </Grid>
        )
    }
}

export default Filters;