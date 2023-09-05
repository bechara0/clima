import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import buscar from "../img/buscar.png";
import Infoclima from "./Infoclima";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Input = styled.input`
  width: 300px;
  height: 27px;
  border-radius: 7px;
  box-shadow: 2px 2px 6px yellow;
`;

const Imagen = styled.img`
  width: 23px;
  margin: 3px;
`;

const Boton = styled.button`
  margin-left: 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 2px 2px 6px yellow;
`;

const ContenedorInicial = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
`;

const Localizacion = ({
  objetoBusqueda,
  setObjetoBusqueda,
  conClick,
  setConClick,
  resultadoClima,
  setResultadoClima,
}) => {
  const [busqueda, setBusqueda] = useState("");
  const [coordenadas, setCordenadas] = useState({});

  useEffect(() => {
    if (conClick) {
      const datosCordenadas = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${objetoBusqueda},AR&units=metric&limit=5&appid=67197d23e283bc5da4164ae2b8af7f12`;
        const search = await fetch(url);
        const resultado = await search.json();
        console.log("resultado,", resultado);
        const objectoCoordenadas = {
          lat: resultado.coord.lat,
          lon: resultado.coord.lon,
          name: resultado.name,
          temp: resultado.main.temp,
          humidity: resultado.main.humidity,
        };
        setCordenadas(objectoCoordenadas);
        setConClick(false);
      };
      datosCordenadas();
    }
  }, [conClick]);

  useEffect(() => {
    console.log(coordenadas);
    const datosClima = async () => {
      const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${coordenadas.lat}&lon=${coordenadas.lon}&units=metric&appid=67197d23e283bc5da4164ae2b8af7f12`;
      const search2 = await fetch(url2);
      const climaFinal = await search2.json();
      setResultadoClima(climaFinal);
      console.log("datos del clima: ", resultadoClima);

      setCordenadas({});
    };
    if (coordenadas.length > 0) {
      datosClima();
    }
  }, [coordenadas]);

  const handleSearch = (e) => {
    e.preventDefault();
    setObjetoBusqueda(busqueda);
    setConClick(true);
  };

  return (
    <>
      <Form>
        <Input
          type="text"
          placeholder="Ingrese Localización"
          onChange={(e) => setBusqueda(e.target.value)}
          value={busqueda}
        />
        <Boton onClick={handleSearch}>
          <Imagen src={buscar} alt="imagen de buscador" />
        </Boton>
      </Form>
      <ContenedorInicial>
        <p>Lugar: {coordenadas.name}</p>
        <p>Temperatura: {coordenadas.temp}</p>
        <p>Humedad: {coordenadas.humidity}</p>
      </ContenedorInicial>

      <Infoclima resultadoClima={resultadoClima} />
    </>
  );
};

export default Localizacion;
