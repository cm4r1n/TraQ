import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"; 
import SideBar from "./SideBar";
import Footer from "./Footer";
import Card from "./Card";
import Content from "./Content";

function App() {
  let logged = false
  
  return (
    <div>
      <Header/>
      <SideBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
