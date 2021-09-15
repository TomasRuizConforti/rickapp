import React from "react";

const Tarjeta = () => {
  return (
    <div className="Tarjeta">
      <div className="ImagenTarjeta">
        <img src="" alt="" />
      </div>
      <div className="DescripcionTarjeta">
        <h4>
          <a href="">Nombre Personaje</a>
        </h4>
        <p className="Estado">Estado - Tipo de Criatura</p>
        <div className="LocacionTarjeta">
          <h5>Ultima Locacion Conocida</h5>
          <p>Localizacion</p>
        </div>
        <div className="LocacionTarjeta">
          <h5>Visto Por Primera Vez En</h5>
          <p>Localizacion</p>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
