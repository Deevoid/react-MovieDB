import React from "react";
import Latest from "./Latest";
import Playing from "./Playing";
import Upcoming from "./Upcoming";
import Search from "./Search";

export default function Homepage() {
  return (
    <div className="container">
      <Latest />
      <Search />
      <Playing />
      <Upcoming />
    </div>
  );
}
