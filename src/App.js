import React from "react";
import "./App.css";
import "./style.css";
import logo from "./Kotor.jpg";
import Footer from "./Footer";
import Dictionary from "./Dictionary";

const App = () => {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
         <div className= "title">
      Dictionary
           </div>
        
      </header>
        <main>
          <Dictionary />
        </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
 
