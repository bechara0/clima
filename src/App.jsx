import Header from "./components/Header";
import Localizacion from "./components/Localizacion";
import { useEffect, useState } from "react";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [coordenadas, setCordenadas] = useState({});

  useEffect(() => {
    const cordenadas = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${busqueda},AR&appid=67197d23e283bc5da4164ae2b8af7f12`;
      const busqueda = await fetch(url);
      const resultado = await busqueda.json();
      setCordenadas(resultado);
    };
  }, [busqueda]);
  console.log(coordenadas);
  return (
    <>
      <Header />
      <Localizacion setBusqueda={setBusqueda} busqueda={busqueda} />
    </>
  );
}

export default App;
