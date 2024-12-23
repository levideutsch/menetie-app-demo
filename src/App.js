
import React, { useContext, useState } from "react";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import Test from "./components/Test";
import ExploreOrList from "./components/sign-up/ExploreOrList";
import { GlobalStylesContext } from "./context/GlobalStyles";
import { Button } from "@mui/material";

function App() {
  const {colors, fonts} = useContext(GlobalStylesContext)

  return (
    <div>

      {/* App
      <h1 style={{ ...colors.darkBlue, ...fonts.quicksandFont }}>
        Dark Blue with Quicksand Font
      </h1>

      <Button style={{ ...colors.darkBlue, ...fonts.quicksandFont }}>Click here for stuff</Button>
 */}




      <Routes>
        <Route path="/test" element={<Test />}/>
        <Route path="/signup" element={<ExploreOrList />}/>
      </Routes>

    </div>
  );
}

export default App;
