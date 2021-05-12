import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useModal from "./../../../custom-hooks/useModal";
import PlayerDetail from "./../PlayerDetail/PlayerDetail.component";
import Modal from "./../../Common/Modal/Modal.component";
import "./Player.styles.scss";

const Player = ({ data }) => {
  const { modal, handleCloseModal, handleOpenModal } = useModal();
  const {
    first_name,
    id,
    last_name,
    height_feet,
    height_inches,
    position,
    weight_pounds,
  } = data;
  const namePlayer = `${first_name} ${last_name}`;
  const height =
    height_feet !== null && height_inches !== null
      ? `${height_feet},${height_inches}"`
      : "No data";
  const weight = weight_pounds !== null ? weight_pounds : "No data";
  return (
    <Fragment>
      <Grid key={id} item xs={12} sm={12} md={4}>
        <Card variant="outlined" className="card">
          <CardMedia
            className="card-game-image"
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
              <p onClick={handleOpenModal} className="card-game-stats">
                Show stats
              </p>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Modal isOpen={modal} onClose={handleCloseModal}>
        <PlayerDetail data={data} />
      </Modal>
    </Fragment>
  );
};

Player.displayName = "Player";

export default Player;
