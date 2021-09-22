import React from "react";
import "../styles/PieDePagina.module.css";

const primera_parte = ["CHARACTERS", "LOCATIONS", "EPISODES"];
const transformarPrimeraParte = (texto) => {
  return (
    <li>
      <a href="/">{texto}</a>
    </li>
  );
};
const primeraParte = primera_parte.map(transformarPrimeraParte);

const segunda_parte = ["SERVER STATUS"];
const transformarSegundaParte = (texto) => {
  return (
    <li>
      <a href="">{texto}</a>
    </li>
  );
};
const segundaParte = segunda_parte.map(transformarSegundaParte);
const PieDePagina = () => {
  return (
    <footer>
      <ul>{primeraParte}</ul>
      <ul>{segundaParte}</ul>
      <ul>
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
