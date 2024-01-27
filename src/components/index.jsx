import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";




const Rayout = () => {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Rayout;