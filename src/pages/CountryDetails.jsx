import { useParams } from "react-router"
import { useEffect, useState } from 'react';
// componente globales
import Menu from "../components/Menu";
import HeaderCountry from "../components/HeaderCountry";

// estilos del propio CountryDetails
import '../styles-pages/CountryDetails.css'


const CountryDetails = () => {

    // estados del componente
    const [data, setData] = useState([])
    const [err, setErr] = useState(false)

    // useParam
    const {country} = useParams()
    console.log(country)
    useEffect(() => {
        const getDetailsCountry = async () => {
            const url = `https://restcountries.eu/rest/v2/name/${country}`
            const response = await fetch(url).then(res => res.json()).catch(er => setErr(er))
            setData(response)
        }
        country && getDetailsCountry()
    },[country])
    console.log(data)
    return (
        <>
        <Menu></Menu>
        <HeaderCountry />
        {!err ? data.length >= 1 ? <div className='country-details'>
           <div className='img-details'>
                <img src={data[0].flag} alt={`bandera de ${data[0].name}`}/>
            </div>
            <div className='info-details'>
                <ol>
                    <li><b>nombre: </b> {data[0].name} </li>
                    <li><b>nombre nativo: </b> {data[0].nativeName}</li>
                    <li><b>capital: </b> {data[0].capital}</li>
                    <li><b>region: </b> {data[0].region}</li>
                    <li><b>sub region: </b> {data[0].subregion}</li>
                    <li><b>poblacion estimada: </b> {data[0].population}</li>
                </ol>
            </div>
        </div> : 'cargando datos...' : 'hubo un erro'}
        </>
    )
}
export default CountryDetails