import { Paciente } from "./Paciente";
export const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente}) => {


  return (
    <div className="md:w-1/2  md:h-screen lg:w-3/5 overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center ">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              pacientes y citas
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center ">
            Añade pacientes {""}
            <span className="text-indigo-600 font-bold ">
              para poder visualizarlos
            </span>
          </p>
        </>
      )}

        { 
          pacientes.map(paciente=>(
            <Paciente key={paciente.id} paciente={paciente} eliminarPaciente={eliminarPaciente} setPaciente={setPaciente} />
          ))

        }




      
    </div>
  );
};
