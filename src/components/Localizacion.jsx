import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import buscar from "../img/buscar.png";
import Infoclima from "./Infoclima";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 27px;
  border-radius: 7px;
  box-shadow: 2px 2px 6px yellow;
  margin-left: 20px;
  margin-bottom: 15px;
`;

const Imagen = styled.img`
  width: 23px;
  margin: 3px;
`;

const Boton = styled.button`
  margin: 0 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px 6px yellow;
`;
const Parrafo2 = styled.p`
  margin: 15px;
  text-align: left;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
`;

const Localizacion = ({
  objetoBusqueda,
  setObjetoBusqueda,
  conClick,
  setConClick,
  resultadoClima,
  setResultadoClima,
}) => {
  const [busquedaCiudad, setBusquedaCiudad] = useState("");
  const [busquedaProvincia, setBusquedaProvincia] = useState("");
  const [busquedaPais, setBusquedaPais] = useState("");

  useEffect(() => {
    if (conClick) {
      const datosClima = async () => {
        const key = "5c59d5f1a31e4dd6b8d154149230609";
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${objetoBusqueda.ciudad},${objetoBusqueda.provincia},${objetoBusqueda.pais}&lang=es`;
        const search = await fetch(url);
        const resultado = await search.json();
        setResultadoClima(resultado);
        setConClick(false);
      };
      datosClima();
    }
  }, [conClick]);

  const handleSearch = (e) => {
    e.preventDefault();
    const parametrosLocalidad = {
      ciudad: busquedaCiudad,
      provincia: busquedaProvincia,
      pais: busquedaPais,
    };
    setObjetoBusqueda(parametrosLocalidad);
    console.log("parametros: ", parametrosLocalidad);
    setConClick(true);
  };

  return (
    <>
      <Form>
        <Input
          type="text"
          placeholder="Ingrese Localidad"
          onChange={(e) => setBusquedaCiudad(e.target.value)}
          value={busquedaCiudad}
        />
        <Input
          type="text"
          placeholder="Ingrese Provincia"
          onChange={(e) => setBusquedaProvincia(e.target.value)}
          value={busquedaProvincia}
        />
        <Input
          type="text"
          placeholder="Ingrese País (opcional)"
          onChange={(e) => setBusquedaPais(e.target.value)}
          value={busquedaPais}
        />
        <Boton onClick={handleSearch}>
          <Imagen src={buscar} alt="imagen de buscador" />
        </Boton>
      </Form>
      {Object.keys(resultadoClima).length > 0 ? (
        <Infoclima resultadoClima={resultadoClima} />
      ) : (
        <Parrafo2>Esperando resultados de búsqueda</Parrafo2>
      )}
    </>
  );
};

export default Localizacion;
