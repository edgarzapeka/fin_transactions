import React from 'react';

import { withStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const Category = props => {
    const { selectCategory, selectedCategories, category, classes } = props;

    return (
        <Chip
            key={category}
            label={category}
            clickable
            onClick={() => selectCategory(category)}
            className={classes.chip}
            color={selectedCategories.includes(category) ? 'secondary' : 'primary'}
            variant="outlined"
        />
    )
}

const styles = theme => ({
    
});

export default withStyles(styles)(Category);