import React from "react";
import Typography from "@material-ui/core/Typography";

import Job from "./Job";
import JobModal from "./JobModal";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

export default function Jobs({ jobs }) {
  // modal

  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Pagination

  const numJobs = jobs.length;
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  }

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    scrollToTop();
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    scrollToTop();
  }

  return (
    <div className="container">
      <div className="jobs">
        <JobModal open={open} job={selectedJob} handleClose={handleClose} />
        <div className="header">
          <Typography variant="h4" component="h1">
            Entry Level Software Jobs
          </Typography>
          <Typography variant="h6" component="h1">
            Found {numJobs} Jobs
          </Typography>
          <Typography variant="h8">Source: Guthub Jobs API</Typography>
        </div>
        {jobsOnPage.map((job, i) => (
          <Job
            key={i}
            job={job}
            onClick={() => {
              handleClickOpen();
              selectJob(job);
            }}
          />
        ))}
      </div>
      <MobileStepper
        m={3}
        variant="dots"
        steps={Math.ceil(numJobs / 50)}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
