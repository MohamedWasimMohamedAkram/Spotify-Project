import "./styles.css";
import SideBar from "./SideBar";
import React from "react";
import Container from "./Container";
import BottomPlayer from "./BottomPlayer";
function App() {
  return (
    <div>
      <SideBar />
      <BottomPlayer />
      <Container />
    </div>
  );
}
export default App;
