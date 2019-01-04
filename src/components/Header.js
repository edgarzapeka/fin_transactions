import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Header = props => {
    const { classes } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="default" className={classes.button}>
                    Accounts
                </Button>
                <Button color="default" className={classes.button}>
                    Transactions
                </Button>
            </Toolbar>
      </AppBar>
    )
}

const styles = theme => ({
    
  });
  

export default withStyles(styles)(Header);