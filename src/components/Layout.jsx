import NavBar from "./NavBar";
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