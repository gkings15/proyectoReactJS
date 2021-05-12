import React from "react";
import { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import images from "./../../../constants/images";
import propTypes from "prop-types";
import TableStats from "./../../Common/TableStats/TableStats.component";
import "./PlayerDetail.styles.scss";

const PlayerDetail = ({ data }) => {
  const {
    first_name,
    height_feet,
    height_inches,
    last_name,
    position,
    team,
    weight_pounds,
  } = data;
  const { abbreviation, city, division, full_name, name } = team;
  const namePlayer = `${first_name} ${last_name}`;
  const height =
    height_feet !== null && height_inches !== null
      ? `${height_feet},${height_inches}"`
      : "No data";
  const weight = weight_pounds !== null ? weight_pounds : "No data";
  const imgSrc = images[city]
    ? images[city]
    : "https://i.ibb.co/tQMy0GC/page-not-found.png";
  return (
    <Fragment>
      <Card variant="outlined" className="card">
        <CardMedia className="card-game-image2" image={imgSrc} title={name} />
        <CardContent className="card-game-content">
          <div>
            <h4 className="text-white">{full_name}</h4>
            <p className="text-white">{`City: ${city}`}</p>
            <p className="text-white">{`NickName: ${abbreviation}`}</p>
            <p className="text-white">{`Division: ${division}`}</p>
          </div>
        </CardContent>
        <CardMedia
          className="card-game-image2"
          image={"https://i.ibb.co/dW8nDj4/logo.jpg"}
          title={namePlayer}
        />
        <CardContent className="card-game-content">
          <div>
            <h4 className="text-white">{namePlayer}</h4>
            <p className="text-white">{`Height: ${height}`}</p>
            <p className="text-white">{`Weight: ${weight}`}</p>
            <p className="text-white">{`Position: ${
              position ? position : "Not found"
            }`}</p>
          </div>
        </CardContent>
      </Card>
      <TableStats abbreviation={abbreviation} />
    </Fragment>
  );
};

PlayerDetail.prototype = {
  data: propTypes.object,
};

PlayerDetail.displayName = "PlayerDetail";

export default PlayerDetail;
