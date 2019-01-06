import React from 'react';
import Category from './Category';

import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const CategoryList = props => {
    const { categories, selectedCategories, selectCategory, classes } = props;

    return (
        <Grid item xs={12} className={classes.categoriesWrapper}>
            <div className={classes.categoriesHeading}>
                <Typography className={classes.categoriesTitle}>
                    Select Category
                </Typography>
                { selectedCategories.length > 0 && (
                    <Button variant="contained" color="secondary" className={classes.buttonClearAll} onClick={() => selectCategory(null)}>
                        Clear All
                    <ClearIcon className={classes.rightIcon} />
                    </Button>
                ) }
            </div>
            <div className={classes.categoriesBlock}>
                { categories.map(c =>  <Category key={c} category={c} selectedCategories={selectedCategories} selectCategory={selectCategory} />)}
            </div>
        </Grid>
    )
}


const styles = theme => ({
    categoriesHeading: {
        margin: '1em',
        display: 'flex',
        
    },
    categoriesTitle: {
        fontSize: '1.5rem',
    },
    buttonClearAll: {
        marginLeft: '1em'
    },
    categoriesWrapper: {
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoriesBlock: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
});

export default withStyles(styles)(CategoryList);