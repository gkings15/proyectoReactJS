import React, { Fragment, useContext } from "react";
import { DetailContext } from "../../contexts/DetailContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import CollectionInfo from "./../../components/Collection/CollectionInfo/CollectionInfo.component";
import Players from "./../../components/Players/Players/Players.component";
import ErrorBoundary from "./../../components/Common/ErrorBoundary/ErrorBoundary.component";

const TeamsDetail = () => {
  const { doneFetch, team, doneFetchPlayers, players } = useContext(
    DetailContext
  );
  return (
    <Fragment>
      {doneFetch &&
      doneFetchPlayers &&
      Object.entries(team).length &&
      Object.entries(players).length ? (
        <Fragment>
          <CollectionInfo item={team} />
          <Grid container spacing={3}>
            <ErrorBoundary>
              <Players players={players} />
            </ErrorBoundary>
          </Grid>
        </Fragment>
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

TeamsDetail.displayName = "TeamsDetail";

export default TeamsDetail;
