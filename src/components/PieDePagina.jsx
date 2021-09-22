import React from "react";
import "../styles/PieDePagina.module.css";

const PieDePagina = () => {
  return (
    <footer>
      <ul className="primera_parte">
        <li>
          <a href="">CHARACTERS</a>
        </li>
        <li>
          <a href="">LOCATIONS</a>
        </li>
        <li>
          <a href="">EPISODES</a>
        </li>
      </ul>
      <ul className="segunda_parte">
        <li>
          <a href="">SERVER STATUS</a>
        </li>
      </ul>
      <ul className="tercera_parte">
        <li>
          <a href="">
            <img src="" alt="Git Hub" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="" alt="Help us" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default PieDePagina;
