import { Outlet } from "react-router-dom";
import React from 'react'



const Main = () => {
  return(
    <main id="main" role="main">
      <Outlet/>
    </main>
  )
}

export default Main;