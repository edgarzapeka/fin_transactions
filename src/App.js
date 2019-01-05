import React, { Component } from 'react';
import './App.css';
import * as API from './api';
import Filters from './components/Filters';
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import ErrorBoundary from './ErrorBoundary';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      transactions: [],
      categories: [],
      filters: {
        selectedAccount: "",
        selectedCategories: [],
        dateOrderBy: 'recent'
      }
    }

    this.selectAccount = this.selectAccount.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.selectDateOrder = this.selectDateOrder.bind(this);
  }

  selectAccount(event) {
    const selectedCategories = this.state.filters.selectedCategories;
    this.setState(( prevState, props ) => ({
      filters: {
        selectedAccount: event.target.value,
        selectedCategories: selectedCategories,
        dateOrderBy: prevState.filters.dateOrderBy
      }
    }))
  }

  selectCategory(category) {
    const selectedCategories = this.state.filters.selectedCategories;

    const updatedCategories = selectedCategories.includes(category) ? 
      selectedCategories.filter(c => c !== category) :
      [...selectedCategories, category ];
  
    this.setState(( prevState, props) => ({
      filters: {
        selectedAccount: prevState.filters.selectedAccount,
        selectedCategories: updatedCategories,
        dateOrderBy: prevState.filters.dateOrderBy
      }
    }))
  }

  selectDateOrder() {
    const selectedCategories = this.state.filters.selectedCategories;
    const selectedAccount = this.state.filters.selectedAccount;

    this.setState(( prevState, props ) => ({
      filters: {
        selectedAccount: selectedAccount,
        selectedCategories: selectedCategories,
        dateOrderBy: prevState.filters.dateOrderBy === 'recent' ? 'oldest' : 'recent'
      }
    }))
  }

  componentDidMount() {
    API.getAllAccounts()
      .then(response => response.json())
      .then(data => this.setState({ accounts: data.accounts }))
    API.getAllTransactions()
      .then(response => response.json())
      .then(data => { this.setState({ transactions: data.transactions })});
    API.getAllCategories()
      .then(response => response.json())
      .then(data => this.setState({ categories: data.categories }))
  }

  render() {
    const { classes } = this.props;
    const { accounts, filters, transactions, categories } = this.state;
  
    const filteredByAccount = filters.selectedAccount === "" ? 
      transactions :
      transactions.filter(t => t.accountId === filters.selectedAccount);
    
    const filteredByCategory = filters.selectedCategories.length === 0 ? 
      filteredByAccount : 
      filteredByAccount.filter(t => filters.selectedCategories.includes(t.category));
 
    const filteredByDate = filters.dateOrderBy === 'recent' ? 
      filteredByCategory.sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)) :
      filteredByCategory.sort((a, b) => new Date(a.transactionDate) - new Date(b.transactionDate));
    
    return (
      <Grid container  className={classes.root}>
      <ErrorBoundary>
          <Header />
          <Filters 
            accounts={accounts} 
            selectedAccount={filters.selectedAccount} 
            selectAccount={this.selectAccount} 
            categories={categories}
            selectedCategories={filters.selectedCategories}
            selectCategory={this.selectCategory}
            dateOrderBy={filters.dateOrderBy}
            selectDateOrder={this.selectDateOrder}
          />
          <TransactionList transactions={filteredByDate}/>
        </ErrorBoundary>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    
  },
});

export default withStyles(styles)(App);
