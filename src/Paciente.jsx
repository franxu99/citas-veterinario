
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');

        if(respuesta){
            eliminarPaciente(id);
            setPaciente({})
        }
    }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between">
            <button
                className="bg-purple-500 text-white rounded-md py-2 px-10 uppercase font-semibold"
                onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button 
                className="bg-red-500 text-white rounded-md py-2 px-10 uppercase font-semibold"
                onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente