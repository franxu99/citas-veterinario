import { useState, useEffect } from 'react'
import './App.css'
import ListadoPacientes from './ListadoPacientes'
import Formulario from './Formulario'
import Header from './Header'

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <>
      
        <Header />
        <div className='flex mt-12'>
          <Formulario 
            pacientes = { pacientes }
            setPacientes = { setPacientes }
            paciente = { paciente }
            setPaciente = { setPaciente }
          />
          <ListadoPacientes 
            pacientes = { pacientes }
            setPaciente = { setPaciente }
            eliminarPaciente = { eliminarPaciente }
          />
        </div>
      
    </>
  )
}

export default App
