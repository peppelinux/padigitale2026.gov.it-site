import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  heroImg: {
    position: 'absolute',
    right: '0',
    top: '0',
    maxHeight: '100%',
    '@media (max-width: 768px)': {
      position: "relative",
    }
  },
});

export const HeroBackground = ({ image, className }) => {
  const classes = useStyles();
  return (
    <img src={`/assets/${image}`} alt="italy" className={classes.heroImg} />
  );
};
