import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const ContenedorInicial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
  border-radius: 25px;
  width: 55%;
  margin: 30px auto;
  box-shadow: 2px 2px 6px yellow;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Boton = styled.button`
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px 6px yellow;
  font-size: 1rem;
  padding: 8px;
  font-weight: 700;
`;

const Parrafo = styled.p`
  margin: 15px;
  text-align: left;
  color: white;
  font-size: 1.2em;
  font-weight: 700;
`;

const Lugares = ({ lugar, setResultadoClima, resultadoClima }) => {
  const [seleccion, setSeleccion] = useState(false);

  useEffect(() => {
    const datosClimaticos = async () => {
      const key = "5c59d5f1a31e4dd6b8d154149230609";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lugar.lat}&lon=${lugar.lon}&units=metric&appid=67197d23e283bc5da4164ae2b8af7f12`;
      console.log("url:", url);
      const search = await fetch(url);
      const climaFinal = await search.json();
      setResultadoClima(climaFinal);
      console.log(resultadoClima);
    };
    datosClimaticos();
    setSeleccion(false);
  }, [seleccion]);

  const handleSeleccion = () => {
    const cordFinal = {
      lat: lugar.lat,
      log: lugar.lon,
    };
    setSeleccion(true);
    console.log("seleccion", cordFinal);
  };

  return (
    <>
      <ContenedorInicial>
        <Parrafo>Lugar: {lugar.display_name}</Parrafo>
        <Boton onClick={handleSeleccion}>Seleccionar</Boton>
      </ContenedorInicial>
    </>
  );
};

export default Lugares;
