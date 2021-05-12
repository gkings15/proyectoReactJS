import React, { Fragment, useContext } from "react";
import { PlayersContext } from "./../../contexts/PlayersContext";
import { Pagination } from "@material-ui/lab";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import Players from "./../../components/Players/Players/Players.component";
import SearchBar from "./../../components/SearchBarPlayers/SearchBarPlayers.component";
import Message from "./../../components/Common/Message/Message.component";
import "./HomePlayers.styles.scss";

const HomePlayers = () => {
  const {
    currentPage,
    players,
    totalPages,
    doneFetchPlayers,
    validatePage,
    validateQPlayer,
  } = useContext(PlayersContext);
  return (
    <Fragment>
      <h1 className="text-center">Players in NBA</h1>
      <SearchBar validateQPlayer={validateQPlayer} />
      {doneFetchPlayers ? (
        Object.entries(players).length ? (
          <Fragment>
            <Grid container spacing={3}>
              <Players players={players} />
            </Grid>
            <div className="container-pagination">
              <Pagination
                className="pagination"
                count={totalPages}
                color="secondary"
                onChange={(e, page) => validatePage(e, page)}
                showFirstButton
                showLastButton
                size="large"
                variant="outlined"
                boundaryCount={3}
                page={currentPage}
              />
            </div>
          </Fragment>
        ) : (
          <Message text="No results found" />
        )
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};
HomePlayers.displayName = "HomePlayers";

export default HomePlayers;
