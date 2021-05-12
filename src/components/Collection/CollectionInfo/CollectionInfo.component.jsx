import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import images from "./../../../constants/images";

const CollectionInfo = ({ item }) => {
  const { full_name, city, abbreviation, conference, division } = item;
  const clase =
    conference.toLowerCase().trim() === "west" ? "card_w" : "card_e";
  const imgSrc = images[city]
    ? images[city]
    : "https://i.ibb.co/tQMy0GC/page-not-found.png";
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Card className={clase}>
            <div className="body text-white">
              <h1 className="text-center">{full_name}</h1>
              <p>{`City: ${city}`}</p>
              <p>{`NickName: ${abbreviation}`}</p>
              <p>{`Division: ${division}`}</p>
            </div>
          </Card>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="main-container">
            <img src={imgSrc} alt={full_name} width="50%" />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

CollectionInfo.displayName = "CollectionInfo";

export default CollectionInfo;
