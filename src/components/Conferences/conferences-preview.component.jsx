import React from "react";
import { withRouter } from "react-router-dom";

import "./conferences-preview.styles.scss";

const ConferencesPreview = ({
  title,
  conferenceLogo,
  history,
  linkUrl,
  match,
}) => (
  <div
    className="conferences-preview"
    onClick={() => history.push(`${match.url}conference/${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${conferenceLogo})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">LETS GO !</span>
    </div>
  </div>
);

ConferencesPreview.displayName = "ConferencesPreview";

export default withRouter(ConferencesPreview);
