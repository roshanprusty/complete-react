import React from "react";
import Countdown from "./Countdown";

function Display() {
  return (
    <div>
      <h1>My Countdown App</h1>
      <Countdown time={60} />
    </div>
  );
}

export default Display;
