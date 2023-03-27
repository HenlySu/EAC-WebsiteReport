import NavBar from "./navBar/NavBar";
import NavBar2 from "./navBar/NavBar2"
import Footer from "./Footer";

export default function Layout({children}){
   return(
      <>
         <NavBar />
         <NavBar2 />
         {children}
         {/* To be finished later on */}
         {/* <Footer /> */}
      </>
   )
}