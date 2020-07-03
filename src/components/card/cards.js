import React from "react";
import { Grid } from "@material-ui/core";
import EachCard from "./eachCard";
import Loading from './../loading/loading';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Loading />;
  }
  return (
    <div>
      <Grid container spacing={3} justify="center">
        <EachCard
          title="Infected"
          value={confirmed}
          lastUpdate={lastUpdate}
        />
        <EachCard
          title="Recovered"
          value={recovered}
          lastUpdate={lastUpdate}
        />
        <EachCard
          title="Deaths"
          value={deaths}
          lastUpdate={lastUpdate}
        />
      </Grid>
    </div>
  );
};

export default Cards;
