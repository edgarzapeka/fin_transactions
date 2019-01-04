import React, { Component } from 'react';
import './App.css';
import * as API from './api';
import Account from './components/Account';
import Header from './components/Header';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: []
    }
  }

  componentDidMount() {
    API.getAllAccounts().then(response => response.json())
    .then(data => {
      this.setState({ accounts: data.accounts });
    })
  }

  render() {
    const { accounts } = this.state;
    const { classes } = this.props;

    return (
      <Grid container spacing={16} className={classes.root}>
      <Header />
        {accounts.map(a => (<Account  account={a} key={a.accountId}/>))}
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    
  },
});

export default withStyles(styles)(App);
