import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./CollectionCard.styles.scss";
import images from "./../../../constants/images";

const CollectionCard = ({ items, link }) => {
  return (
    <Fragment>
      {items.map((item) => {
        const { id, full_name, city } = item;
        const imgSrc = images[city]
          ? images[city]
          : "https://i.ibb.co/tQMy0GC/page-not-found.png";
        return (
          <Grid item xs={12} sm={6} md={3} key={id}>
            <Link to={`/${link}/${id}`} className="collection-link">
              <Card
                style={{
                  backgroundColor: "#353535",
                  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imgSrc}) center center/cover no-repeat`,
                }}
                className="collection-card"
              >
                <CardContent className="text-white">
                  <h2>{full_name}</h2>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Fragment>
  );
};

CollectionCard.prototype = {
  link: propTypes.string,
  items: propTypes.object,
};

CollectionCard.displayName = "CollectionCard";

export default CollectionCard;
