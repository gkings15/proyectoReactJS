import React, { Fragment, useContext } from "react";
import { TeamsContext } from "./../../contexts/TeamsContext";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import CollectionCard from "./../../components/Collection/CollectionCard/CollectionCard.component";
import Message from "./../../components/Common/Message/Message.component";
import SearchBarTeam from "../../components/SearchBarTeam/SeachBarTeam.component";

const HomeTeams = () => {
  const {
    doneFetch,
    teams,
    doneFetchSearchedTeams,
    searchedTeams,
    conference,
    validateQTeam,
  } = useContext(TeamsContext);
  return (
    <Fragment>
      <h1 className="text-center">{conference}</h1>
      <SearchBarTeam validateQTeam={validateQTeam} />
      {!doneFetchSearchedTeams ? (
        doneFetch ? (
          <Grid container spacing={2}>
            <CollectionCard link="team" items={teams} />
          </Grid>
        ) : (
          <ProgressBar />
        )
      ) : searchedTeams.length ? (
        <Grid container spacing={2}>
          <CollectionCard link="team" items={searchedTeams} />
        </Grid>
      ) : (
        <Message text="No results found" />
      )}
    </Fragment>
  );
};

HomeTeams.displayName = "HomeTeams";

export default HomeTeams;
