import React from "react";
import "./card.css";
import Avatar from "./Avatar";
const Card = ({ name, email, phone, imgURL }) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{name}</h2>
          <Avatar imgURL={imgURL} />
        </div>
        <div className="bottom">
          <p className="info">{phone}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
