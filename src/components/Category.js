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
            color={selectedCategories.includes(category) ? 'secondary' : 'primary'}
            variant="outlined"
            className={classes.category}
        />
    )
}

const styles = theme => ({
    category: {
        margin: '0.2em'
    }
});

export default withStyles(styles)(Category);