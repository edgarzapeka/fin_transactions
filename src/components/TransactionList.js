import React from 'react';

import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

const TransactionList = props => {
        const { classes, transactions } = props;

        return (
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Running Balance</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Date</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map(t => {
                        return (
                        <TableRow key={t.transactionId}>
                            <TableCell component="th" scope="row">
                            {t.description}
                            </TableCell>
                            <TableCell align="right">{t.amount}</TableCell>
                            <TableCell align="right">{t.runningBalance}</TableCell>
                            <TableCell align="right">{t.category}</TableCell>
                            <TableCell align="right">{t.transactionDate}</TableCell>
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        )
};

const styles = theme => ({
});

export default withStyles(styles)(TransactionList);