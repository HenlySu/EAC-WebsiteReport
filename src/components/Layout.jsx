import NavBar from "./navBar/NavBar";
import Footer from "./Footer";

export default function Layout({children}){
   return(
      <>
         <NavBar />
         {children}
         {/* To be finished later on */}
         {/* <Footer /> */}
      </>
   )
}