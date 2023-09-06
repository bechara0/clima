import styled from "@emotion/styled";
import desierto from "../img/desierto.png";

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  max-height: 300px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Parrafo = styled.p`
  font-family: "Lilita One", cursive;
  font-size: 4.5rem;
  margin: 1rem;
`;

const Span = styled.span`
  color: yellow;
  font-size: 2rem;
`;

const Imagen = styled.img`
  width: 90px;
  margin: 3px;
`;

const Header = () => {
  return (
    <Contenedor>
      <Imagen src={desierto} alt="imagen desierto" />
      <Parrafo>
        JuanJo <Span>Weather Forecast</Span>
      </Parrafo>
    </Contenedor>
  );
};

export default Header;
