import React from "react";
import LandingScreen from "../LandingScreen";

export default function SplashScreen(props) {

  setTimeout(function () {
    document.getElementById("splash").style.display = "none";
  }, 4000);

  return (
    <div id="splash">
      <LandingScreen {...props} />
    </div>
  );
}
