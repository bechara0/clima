import Header from "./components/Header";
import Localizacion from "./components/Localizacion";
import { useState } from "react";
// import Geolocalizacion from "./components/Geolocalizacion";

function App() {
  const [resultadoClima, setResultadoClima] = useState({});
  const [objetoBusqueda, setObjetoBusqueda] = useState("");
  const [conClick, setConClick] = useState(false);
  const [cordenadas, setCordenadas] = useState([]);

  return (
    <>
      <Header />
      {/* <Geolocalizacion
        setResultadoClima={setResultadoClima}
        resultadoClima={resultadoClima}
      />  */}
      <Localizacion
        objetoBusqueda={objetoBusqueda}
        setObjetoBusqueda={setObjetoBusqueda}
        conClick={conClick}
        setConClick={setConClick}
        setResultadoClima={setResultadoClima}
        resultadoClima={resultadoClima}
        cordenadas={cordenadas}
        setCordenadas={setCordenadas}
      />
    </>
  );
}

export default App;
