import Header from "./components/Header";
import Localizacion from "./components/Localizacion";
import { useEffect, useState } from "react";

function App() {
  const [objetoBusqueda, setObjetoBusqueda] = useState({});

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
        setResultadoClima={setResultadoClima}
        resultadoClima={resultadoClima}
      />
    </>
  );
}

export default App;
