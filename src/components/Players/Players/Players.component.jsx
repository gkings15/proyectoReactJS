import React from "react";
import Player from "./../Player/Player.component";
import propTypes from "prop-types";

const Players = ({ players, team }) =>
  players.map((player) => <Player key={player.id} data={player} team={team} />);

Players.displayName = "Players";

Players.prototype = {
  players: propTypes.object,
  team: propTypes.object,
};

Players.displayName = "Players";

export default Players;
