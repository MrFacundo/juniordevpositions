import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

function getDMY(timestamp) {
  let date_array = timestamp.split(" ");
  let day = date_array.slice(0, 1);
  let month = date_array.slice(2, 3);
  let year = date_array.slice(1, 2);
  return day.concat(month, year).join(" ");
}

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

export default function Job({ job, onClick }) {
  return (
    <Box m={2} pt={3}>
      <Paper onClick={onClick} className={"job"}>
        <div>
          <Typography variant="h6">{job.title}</Typography>
          <Typography>{job.company}</Typography>
          <Typography>{job.location}</Typography>
        </div>
        <div>
          <Typography>{getDMY(job.created_at)}</Typography>
        </div>
      </Paper>
    </Box>
  );
}
