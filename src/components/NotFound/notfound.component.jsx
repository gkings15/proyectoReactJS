import React, { Fragment } from "react";
import Message from "./../Common/Message/Message.component";
import ButtonPrimary from "./../Common/ButtonPrimary/ButtonPrimary.component";
import notfoundimage from "./../../assets/images/notfound.jpg";

const NotFound = () => (
  <Fragment>
    <Message text="404: URL Not Found" />
    <div className="main-container">
      <img alt="back" src={notfoundimage} height="80%" width="80%"/>
    </div>
    <ButtonPrimary type="back" to="/"/>
  </Fragment>
);

NotFound.displayName = "NotFound";

export default NotFound;
