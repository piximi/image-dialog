import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from './ContrastSlider.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

type ContrastSliderProps = {
  contrast: number;
  setContrast: (contrast: number) => void;
};

export const ContrastSlider = (props: ContrastSliderProps) => {
  const { contrast, setContrast } = props;

  const classes = useStyles({});

  const onChange = (event: any, value: any) => {
    setContrast(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Contrast</Typography>

      <Slider
        classes={{ root: classes.slider }}
        min={50}
        max={300}
        step={0.1}
        value={contrast}
        aria-labelledby="label"
        onChange={onChange}
      />
    </div>
  );
};
