import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

export default function Header() {
  return (
    <div className="header">
      <div className="text-container">
        <h1 className="pickIt">PickIt</h1>
      </div>
    </div>
  );
}
