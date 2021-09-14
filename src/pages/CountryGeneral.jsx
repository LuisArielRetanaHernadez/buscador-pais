import { useState, useEffect } from 'react';
// componentes globales
import Country from '../components/Country'
import HeaderCountry from '../components/HeaderCountry';
import Menu from '../components/Menu'
// styles del propio CountryGeneral
import '../styles-pages/CountryGeneral.css'

const CountryGeneral = () => {

    // estados
    const [countryAll, setCountryAll] = useState([])
    const [countryLimit, setCountryLimit] = useState([]);
    const [err, setErr] = useState(false)

    useEffect(() => {
        const getCountryAll = async () => {
            const url = 'https://restcountries.eu/rest/v2/all'
            const response = await fetch(url).then(res => res.json()).catch(er => setErr(true))
            setCountryAll(preve => {
                if(preve !== response){return response}else{return preve}
            })
        }
        getCountryAll()
    },[])

    

    useEffect(() => {
        const limit = []
        if(countryAll.length >= 15 && !err){
            for(let i = 0; i < countryAll.length; i++){
                limit.push(countryAll[i])
                if(i === 14){break}
            }
            setCountryLimit(limit)
        }
    },[countryAll,err])

    console.log(countryLimit)
    return (
       <section>
           <Menu />
           <HeaderCountry />
           <h2>Explora algunos paises </h2>
           <div className="country-general">
            {!err ? countryLimit.length > 0 ? countryLimit.map(data => <Country key={data.name} name={data.name} flag={data.flag} />) : 'cargando...'   : 'err, no hay resultados '}
           </div>
       </section> 
    )
}
export default CountryGeneral;