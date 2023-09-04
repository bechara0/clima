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

const Localizacion = ({ setBusqueda, busqueda }) => {
  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(busqueda);
  };

  return (
    <>
      <Form>
        <Input
          type="text"
          placeholder="Ingrese Localización"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <Boton>
          <Imagen
            src={buscar}
            alt="imagen de buscador"
            onClick={handleSearch}
          />
        </Boton>
      </Form>
    </>
  );
};

export default Localizacion;
