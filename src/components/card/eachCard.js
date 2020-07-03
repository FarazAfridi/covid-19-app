import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import "./cards.styles.css";

const EachCard = ({ value, lastUpdate, title }) => {
  return (
    <Grid
      className={`cards ${title.toLowerCase()}`}
      item
      component={Card}
      xs={12}
      md={3}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value.value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">
          Number of {title.toLowerCase()} from Covid-19
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default EachCard;
