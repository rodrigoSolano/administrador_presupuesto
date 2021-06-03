import React, { useState } from "react";
import Error from "./Error";

function Pregunta({ guardarPresupuesto, guardarRestante, actualizarPregunta }) {
  // definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //Definir el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };

  //Submit para definir el presupuesto

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    //Si se pasa la validacion
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir respuesta"
        />
      </form>
    </>
  );
}

export default Pregunta;
