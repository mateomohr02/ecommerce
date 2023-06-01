import React from "react";

import Navbar from "../NavBar/navbar";
import SideBar from "../SideBar/sidebar";
import CardsProducts from "../CardsProducts/cardsProducts";
import Paginate from "../Paginate/paginate";


function Home() {
  return (
    <div>
        <Navbar/>
        <SideBar/>
        <p>Soy el Home</p>
        <CardsProducts/>
        <Paginate/>     
    </div>
  );
}

export default Home;