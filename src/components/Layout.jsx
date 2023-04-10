import NavBar from "./navBar/NavBar";

export default function Layout({children}){
   return(
      <>
         <NavBar />
         {children}
      </>
   )
}