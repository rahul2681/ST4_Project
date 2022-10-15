import React from "react";
import MultiplePizzas from "../img/about.webp";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Reader's Den is a comprehensive online bookstore for both books and other products of every point of knowledge. Our philosophy is based on information, communication and education, which we feel should be balanced out with a daily dose of knowledge, wisdom, understanding (overstanding, and innerstanding).Our website features books from every literary genre, allowing us to appeal to any particular taste a customer may have. Can't find what you're looking for? We can order the book for you.In just a few business days, we'll get that book to you so that you can enjoy a quiet evening at home, prepare a nice gift for someone or simply use it to expand your horizons.Our experienced staff can assist you in selecting the right literature and will be glad to go that extra mile for you! We hope you enjoy.</p>  
      </div>
    </div>
  );
}

export default About;