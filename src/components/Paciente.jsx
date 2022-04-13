export const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const {nombre,propietario,email,alta,sintomas,id} = paciente


  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mb-6 ">
        <p className="font-bold mb-3 texxt-grey-700 uppercase ">Nombre: {''}
          <span className="font-normal normal-case"> {nombre} </span>

        </p>

        <p className="font-bold mb-3 texxt-grey-700 uppercase ">Propietario: {''}
          <span className="font-normal normal-case">{propietario} </span>

        </p>

        <p className="font-bold mb-3 texxt-grey-700 uppercase ">Email propietario: {''}
          <span className="font-normal normal-case">{email} </span>

        </p>

        <p className="font-bold mb-3 texxt-grey-700 uppercase ">Fecha de ingreso: {''}
          <span className="font-normal normal-case">{alta} </span>

        </p>

        <p className="font-bold mb-3 texxt-grey-700 uppercase ">Sintomas: {''}
          <span className="font-normal normal-case"> {sintomas} </span>

        </p>

        <div className="flex justify-between mt-10">
          <button 
            onClick={()=>setPaciente(paciente)}
            type="button"
            className="py-3 px-10 bg-indigo-500  hover:bg-indigo-700 uppercase font-bold text-white rounded-lg"
            
            
          >Editar</button>
        
        <button 
            onClick={()=>eliminarPaciente(id)}
            type="button"
            className="py-3 px-10 bg-red-500  hover:bg-red-700 uppercase font-bold text-white rounded-lg"
            
            
          >Eliminar</button>

        </div>

        
      </div>
  )
}