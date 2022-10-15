import React from "react";
import { Link } from "react-router-dom";
import ReadingBooks from "../img/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${ReadingBooks})` }}>
      <div className="headerContainer">
        <h1> READER'S DEN </h1>
        <p> Learning never stops...</p>
        <Link to="/menu">
          <button> BUY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;