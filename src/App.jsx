import Header from "./components/Header";
import Localizacion from "./components/Localizacion";
import { useState } from "react";

function App() {
  const [resultadoClima, setResultadoClima] = useState({});
  const [objetoBusqueda, setObjetoBusqueda] = useState({});
  const [conClick, setConClick] = useState(false);

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
