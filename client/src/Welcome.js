import React from "react";
import { Link } from "react-router-dom";

import pickNote from "./assets/pick-note.png"

export default function Welcome() {
  return (
    <div className="welcome">
    <div className="pick-note">
      <Link to={"/search"}>
        <button id="button" ><img src={pickNote} alt=""/></button>
      </Link>
    </div>
      <h1>ClickIt to PickIt</h1>
    </div>
  );
}
