import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import buscar from "../img/buscar.png";
import Infoclima from "./Infoclima";
import Lugares from "./Lugares";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 27px;
  border-radius: 7px;
  box-shadow: 2px 2px 6px yellow;
  margin-left: 20px;
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
  setCordenadas,
  cordenadas,
  
}) => {
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (conClick) {
      const datosCordenadas = async () => {
        const key = "pk.04fe38e2ef3a2de1d40ac18a97d949f4";
        const url = `https://us1.locationiq.com/v1/search?key=${key}&q=${objetoBusqueda}&format=json`;
        const search = await fetch(url);
        const resultado = await search.json();
        setCordenadas(resultado);
        setConClick(false);
        console.log("resultado geolocalizacion-->,", cordenadas);
      };
      datosCordenadas();
    }
  }, [conClick]);

  //   useEffect(() => {
  //     console.log(cordenadas);
  //     const datosClima = async () => {
  //       const url =
  //         "https://api.openweathermap.org/data/2.5/weather?id=2172127&appid=67197d23e283bc5da4164ae2b8af7f12";
  //       const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${cordenadas.lat}&lon=${cordenadas.lon}&units=metric&appid=67197d23e283bc5da4164ae2b8af7f12`;
  //       const search2 = await fetch(url);
  //       const climaFinal = await search2.json();
  //       setResultadoClima("clima", climaFinal);
  //       // console.log("datos del clima: ", resultadoClima);

  //       setCordenadas({});
  //     };
  //     if (cordenadas.length > 0) {
  //       datosClima();
  //     }
  //   }, [cordenadas]);

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
          placeholder="Ingrese Localidad"
          onChange={(e) => setBusqueda(e.target.value)}
          value={busqueda}
        />
        <Boton onClick={handleSearch}>
          <Imagen src={buscar} alt="imagen de buscador" />
        </Boton>
      </Form>
      {cordenadas.length > 0 ? (
        cordenadas.map((lugar) => (
          <Lugares
            key={lugar.place_id}
            lugar={lugar}
        
            resultadoClima={resultadoClima}
            setResultadoClima={setResultadoClima}
          />
        ))
      ) : (
        <Parrafo2>Esperando resultados de búsqueda</Parrafo2>
      )}

      <Infoclima resultadoClima={resultadoClima} />
    </>
  );
};

export default Localizacion;
