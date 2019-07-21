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
import {Card, CardContent, CardMedia} from '@material-ui/core';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'BridgeIT has completely changed our lives. We can now talk to our grandchildren without needing to worry about how to use smartphones. \n- Mr. and Mrs. Mueller.',
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
    // maxWidth: 1500,
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
    height: 400,
    display: 'block',
    maxWidth: 850,
    overflow: 'hidden',
    width: '100%',
  },
  mediastyle:{
    

    maxWidth: 850,
    minWidth: 400,


  },

  card: {
    display: 'flex',
    maxWidth: 1600,
  },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  content: {
    flex: '1 0 auto',
   flexDirection: 'column',
    maxWidth: 600,
  },
  // cover: {
  //   width: 151,
  // },
  // controls: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   paddingLeft: theme.spacing(1),
  //   paddingBottom: theme.spacing(1),
  // },
  // playIcon: {
  //   height: 38,
  //   width: 38,
  // },


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

      <Card className={classes.card}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}

      <CardMedia className={classes.mediastyle}>

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
      </CardMedia>

      <CardContent className={classes.content}>
      <Typography variant="h4">{tutorialSteps[activeStep].label}</Typography>

      </CardContent>

</Card>
    </div>
  );
}

export default withRouter(ImageCarousel);
