import Contador from "./componentes/Contador";
import Informacion from "./componentes/Informacion";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const anioActual = 2023;
  return (
  <section>
    <h1 className="display-3 text-center">Proyecto de react</h1>
    <Informacion comision='c76i' anioActualProps={anioActual}></Informacion>
    <Contador/>
  </section>
  );
}

export default App;
