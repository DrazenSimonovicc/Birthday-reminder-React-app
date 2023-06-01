import React from "react";

export default function Persons(props) {
  return (
    <div className="person">
      <div className="person-img-box">
        <img src={props.image} className="person-img" alt="profile-img" />
      </div>
      <div className="person-text-box">
        <h2 className="person-name">{props.name}</h2>
        <h4 className="person-year">{props.age} years</h4>
      </div>
    </div>
  );
}
