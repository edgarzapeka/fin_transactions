import React from 'react';
import Category from './Category';

import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const CategoryList = props => {
    const { categories, selectedCategories, selectCategory, classes } = props;

    return (
        <>
            { selectedCategories.length > 0 && (
                <Button variant="contained" color="secondary" className={classes.buttonClearAll} onClick={() => selectCategory(null)}>
                    Clear All
                <ClearIcon className={classes.rightIcon} />
                </Button>
            ) }
            <div className={classes.categoriesBlock}>
                { categories.map(c =>  <Category key={c} category={c} selectedCategories={selectedCategories} selectCategory={selectCategory} />)}
            </div>
        </>
    )
}

const styles = theme => ({
    buttonClearAll: {
        margin: '1em'
    },
    categoriesBlock: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
});

export default withStyles(styles)(CategoryList);