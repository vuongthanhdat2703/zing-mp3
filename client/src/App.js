import { useState } from "react";
// import { useSelector, useDispatch } from 'react-redux'
import { Home, Public, Login } from './containers/public/index'
import { Route, Routes } from "react-router-dom";
import path from "./ultis/path";


function App() {

  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
