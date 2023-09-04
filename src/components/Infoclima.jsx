import React, { useEffect, useState } from "react";

const Infoclima = ({
  coordenadas,
  conClick,
  resultadoClima,
  setResultadoClima,
}) => {
  const [hayCoord, setHayCoord] = useState(false);
  const { lat, lon } = coordenadas;
  console.log(lat, lon);

  //   if (lat !== undefined) {
  //     setHayCoord(true);
  //   } else {
  //     setHayCoord(false);
  //   }

  useEffect(() => {
    const clima = async () => {
      if (conClick) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=67197d23e283bc5da4164ae2b8af7f12`;
        const search = await fetch(url);
        const climaFinal = await search.json();
        setResultadoClima(climaFinal);
        console.log("datos del clima: ", resultadoClima);
      }
    };
    clima();
  }, [conClick]);

  return <div>Infoclima</div>;
};

export default Infoclima;
