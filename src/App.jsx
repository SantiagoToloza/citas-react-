import { Header} from "./components/Header";
import { Formulario } from "./components/Formulario";
import { ListadoPacientes } from "./components/ListadoPacientes";
import { useState,useEffect } from "react";
const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({})
  

  const eliminarPaciente = (id) => {
    const pacientesActualizados= pacientes.filter(pacientesDel => pacientesDel.id !== id)
    console.log('eliminando paciente',id);
    setPacientes(pacientesActualizados)
  }

  useEffect(()=>{
    const obtenerLS =()=>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS()
  },[]);


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
    console.log('el componente esta listo, o cambio');
  }, [pacientes])
  

  
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      
      />
      </div>


    </div>
  )
}

export default App;