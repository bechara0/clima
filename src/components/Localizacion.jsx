import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import buscar from "../img/buscar.png";

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

const Localizacion = () => {
  const [busqueda, setBusqueda] = useState("");
  const [objetoBusqueda, setObjetoBusqueda] = useState({});
  const [coordenadas, setCordenadas] = useState({});
  const [conClick, setConClick] = useState(false);

  useEffect(() => {
    if (conClick) {
      const cordenadas = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${objetoBusqueda},AR&appid=67197d23e283bc5da4164ae2b8af7f12`;
        console.log(url);
        const search = await fetch(url);
        const resultado = await search.json();
        setCordenadas(resultado);
        setConClick(false);
      };
      cordenadas();
    }
  }, [conClick]);
  console.log("las coordenadas:", coordenadas);

  const handleSearch = (e) => {
    e.preventDefault();
    setObjetoBusqueda(busqueda);
    setConClick(true);
    console.log("busqueda", objetoBusqueda);
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
    </>
  );
};

export default Localizacion;
