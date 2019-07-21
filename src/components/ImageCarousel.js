import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {Link, withRouter} from "react-router-dom";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'BridgeIT has completely changed our lives. We can now talk to our grandchildren without needing to worry about how to use smartphones. - Mr. and Mrs. Mueller.',
    imgPath:
      'https://imgur.com/s85WOvn.jpg',
  },
  {
    label: 'I can now earn extra money parallel to my study; helping seniors is just added bonus. \n - Laura Taylor,\n student, TUM.',
    imgPath:
      'https://imgur.com/A7NcYTZ.jpg',
  },
  {
    label: 'I can now do online banking on my phone thanks to BridgeIT and their dedicated students. - Sebastian.',
    imgPath:
      'https://imgur.com/QpiJJi1.jpg',
  },
  
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 720,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    fontSize:20,
  },
  img: {
    height: 380,
    display: 'block',
    maxWidth: 1580,
    overflow: 'hidden',
    width: '100%',
  },
}));

function ImageCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default withRouter(ImageCarousel);
