import React from "react";
import Latest from "./Latest";
import Playing from "./Playing";
import Upcoming from "./Upcoming";

export default function Homepage() {
  return (
    <div className="container">
      <Latest />
      <Playing />
      <Upcoming />
    </div>
  );
}
