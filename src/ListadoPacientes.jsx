import Paciente from "./Paciente";


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
        <div className="w-1/2">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="text-center font-black text-3xl">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 text-center mb-5">
                        Administra tus {''}
                        <span className="text-purple-400 font-bold">Pacientes y citas</span>
                    </p>
                </>
            ) :
                <>
                    <h2 className="text-center font-black text-3xl">No Hay Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-5">
                        Comienza agregando pacientes {''}
                        <span className="text-purple-400 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            }
            
            { pacientes.map( (paciente) => {
                return(
                    <Paciente 
                        key={paciente.id}
                        paciente = {paciente}
                        setPaciente = {setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                        />
                )
            })}
            
            
            
        </div>
    );
}

export default ListadoPacientes;