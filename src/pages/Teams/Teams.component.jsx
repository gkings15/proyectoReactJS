import React, { Fragment, useContext } from "react";
import { TeamsContext } from "./../../contexts/TeamsContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import CollectionCard from "./../../components/Collection/CollectionCard/CollectionCard.component";

const Teams = () => {
  const { doneFetch, teams, conference } = useContext(TeamsContext);
  return (
    <Fragment>
      <h1 className="text-center">{conference}</h1>
      {doneFetch && teams ? (
        <Grid container spacing={2}>
          <CollectionCard link="team" items={teams} />
        </Grid>
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

Teams.displayName = "Teams";

export default Teams;
