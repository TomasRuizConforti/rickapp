import React from "react";
import Tarjeta from "./Tarjeta";
import "../styles/SeccionPrincipal.module.css";

const SeccionPrincipal = () => {
  return (
    <main>
      <div className="Titulo_Principal">
        <h1>The Rick and Morty API</h1>
      </div>
      <div className="Tarjetero">
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </div>
    </main>
  );
};

export default SeccionPrincipal;
