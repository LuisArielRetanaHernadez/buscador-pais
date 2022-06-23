// hooks del react dom
import { useState } from 'react';
// componentes globales
import Menu from "../components/Menu"
import Country from "../components/Country";
import ErrFetch from "../components/ErrFetch";
// estilos del propio CountryForm
import '../styles-pages/CountryForm.css'
import Loading from '../components/Loading';

const CountryForm = () => {

    // estados
    const [data, setData] = useState([])
    const [err, setErr] = useState(false);
    const [status, setStatus] = useState(200)
    const [nameCountry, setNameCountry] = useState('')

    const submitSharchCountry = async (event) => {
        event.preventDefault()
        const url = `https://restcountries.com/v2/name/${nameCountry}`
        const response = await fetch(url).then(res => {setStatus(res.status); return res.json()} ).catch(er => setErr(true))
        setData(response)
        console.log(err, ' estatus: ', status)
    }
  
    return (
        <>
            <Menu />
            <div className='country-form'>
                <form onSubmit={submitSharchCountry} className='form-country'>
                    <div className='component-country-form'>
                        <input placeholder='buscar un pais' onChange={(e) => setNameCountry(e.target.value)}/>
                    </div>
                    <div className='container-btn-country-form'>
                        <button type='submit'>Buscar</button>
                    </div>
                </form>
            </div>
            <div className='country-sharch'>
                {!err && status !== 404 ? data.length > 0 ? data.map((data) => <Country key={data.name} flag={data.flag} name={data.name}></Country>) : <Loading /> : <ErrFetch alert='error de busqueda' messages='al parecer no encontramos el pais'></ErrFetch>  }
            </div>
        </>
    )
}

export default CountryForm