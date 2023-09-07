import styled from "@emotion/styled";

const ContenedorInicial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid yellow;
  border-radius: 25px;
  width: 55%;
  margin: 30px auto;
  box-shadow: 2px 2px 6px yellow;
  @media (max-width: 1210px) {
    width: 80%;
  }
  @media (max-width: 720px) {
    width: 80%;
    flex-direction: column;
  }
`;
const Image = styled.img`
  margin: 20px;
  border-radius: 15px;
  box-shadow: 2px 2px 6px yellow;
`;

const Boton = styled.button`
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 4px 4px 6px yellow;
  font-size: 1rem;
  padding: 8px;
  font-weight: 700;
`;

const Parrafo = styled.p`
  margin: 15px;
  text-align: left;
  color: yellow;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Parrafo2 = styled(Parrafo)`
  font-size: 1.2rem;
  color: white;
`;

const Infoclima = ({ resultadoClima }) => {
  const { location, current } = resultadoClima;
  const mapImage = `https://maps.locationiq.com/v3/staticmap?key=pk.04fe38e2ef3a2de1d40ac18a97d949f4&center=${location.lat},${location.lon}&zoom=13&size=300x450&markers=icon:small-yellow-cutout|${location.lat},${location.lon}`;
  console.log("resultado geolocalizacion-->,", resultadoClima);
  return (
    <>
      <ContenedorInicial>
        <div>
          <Image src={mapImage} />
        </div>
        <div>
          <div>
            <Parrafo>
              {location.name}, {location.region}, {location.country}{" "}
            </Parrafo>
          </div>
          <div>
            <Parrafo>{current.condition.text} </Parrafo>
          </div>
          <div>
            <Parrafo2>Temperatura: {current.temp_c} ºC</Parrafo2>
            <Parrafo2>Sensación Térmica: {current.feelslike_c} ºC</Parrafo2>
          </div>
          <div>
            <Parrafo2>Humedad: {current.humidity} %</Parrafo2>
            <Parrafo2>Índice UV: {current.uv}</Parrafo2>
            <Parrafo2>Presión: {current.pressure_mb} milibares</Parrafo2>
          </div>
          <div>
            <Parrafo2>Viento: {current.wind_kph} Km/h</Parrafo2>
            <Parrafo2>Ráfagas: {current.gust_kph}Km/h</Parrafo2>
            <Parrafo2>Dirección Viento: {current.wind_dir}</Parrafo2>
          </div>
        </div>
      </ContenedorInicial>
    </>
  );
};

export default Infoclima;
