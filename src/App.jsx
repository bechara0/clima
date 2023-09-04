import Header from "./components/Header";
import Infoclima from "./components/Infoclima";
import Localizacion from "./components/Localizacion";
import { useEffect, useState } from "react";

function App() {
  const [objetoBusqueda, setObjetoBusqueda] = useState({});
  const [coordenadas, setCordenadas] = useState({});
  const [conClick, setConClick] = useState(false);
  const [resultadoClima, setResultadoClima] = useState({});

  return (
    <>
      <Header />
      <Localizacion
        objetoBusqueda={objetoBusqueda}
        setObjetoBusqueda={setObjetoBusqueda}
        conClick={conClick}
        setConClick={setConClick}
        setCordenadas={setCordenadas}
      />
      <Infoclima
        coordenadas={coordenadas}
        conClick={conClick}
        setResultadoClima={setResultadoClima}
        resultadoClima={resultadoClima}
      />
    </>
  );
}

export default App;
