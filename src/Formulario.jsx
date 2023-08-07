import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    // const [editar, setEditar] = useState('');
    const [error, setError] = useState(false);

    const reiniciarForm = () => {
        //Reinicia el Formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }else{
            reiniciarForm();
        }
    },[paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre, propietario, email, fecha, sintomas].includes('')){
            return setError(true);
        }
        //Cambia el useState para que no aparezca el error         
        setError(false);

        const objetoPaciente = {
            nombre: nombre,
            propietario: propietario,
            email: email,
            fecha: fecha, 
            sintomas: sintomas
            
        }

        if(paciente.id){
            //Editando registro
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState );
            setPacientes(pacientesActualizados);
            setPaciente({});
        }else{
            //Nuevo registro
            objetoPaciente.id = generarId();
            //Recoje los pacientes que hay en el props y añade el nuevo paciente
            setPacientes([...pacientes, objetoPaciente]);
        }

        reiniciarForm();


    }

    return (
        <div className="w-1/2">
            <h2 className="text-3xl text-center font-black">Seguimiento Pacientes</h2>
            <p className="mt-5 text-lg text-center mb-5">
                Añade Pacientes y {''}
                <span className="text-purple-400 font-bold">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>
                {error && <Error >Todos los campos son obligatorios</Error>}
                <div className="mb-5">
                    <label className="block uppercase font-bold" htmlFor="mascota">Nombre mascota</label>
                    <input className="border w-full p-2 mt-2 placeholder-gray-300 rounded-md" 
                            type="text" 
                            name="mascota" 
                            id="mascota" 
                            placeholder="Nombre de la mascota..."
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block uppercase font-bold" htmlFor="propietario">Nombre propietario</label>
                    <input className="border w-full p-2 mt-2 placeholder-gray-300 rounded-md" 
                            type="text" name="propietario" 
                            id="propietario" 
                            placeholder="Nombre del propietario..." 
                            value={propietario} 
                            onChange={(e) => setPropietario(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block uppercase font-bold" htmlFor="email">Nombre email</label>
                    <input className="border w-full p-2 mt-2 placeholder-gray-300 rounded-md" 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Nombre del email..." 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block uppercase font-bold" htmlFor="alta">Alta</label>
                    <input className="border w-full p-2 mt-2 placeholder-gray-300 rounded-md" 
                            type="date" 
                            name="alta" 
                            id="alta" 
                            placeholder="Fecha de alta..."
                            value={fecha} 
                            onChange={(e) => setFecha(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                    <textarea className="border w-full p-2 mt-2 placeholder-gray-300 rounded-md" 
                            placeholder="Describe los síntomas..." 
                            name="sintomas" 
                            id="sintomas"
                            cols="30" 
                            rows="3"
                            value={sintomas} 
                            onChange={(e) => setSintomas(e.target.value)}></textarea>
                </div>
                <input 
                        className="uppercase w-full bg-purple-500 p-2 text-white font-bold cursor-pointer transition hover:bg-purple-400" 
                        type="submit" 
                        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} />
            </form>
        </div>
    );
}

export default Formulario;