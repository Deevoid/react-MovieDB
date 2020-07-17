import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-img">{props.cardImg}</div>
      <div className="card-header">{props.cardHeader}</div>
      <div className="card-body">{props.cardBody}</div>
    </div>
  );
}
