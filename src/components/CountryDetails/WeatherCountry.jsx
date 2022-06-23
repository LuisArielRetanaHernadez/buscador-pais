
import { useState } from 'react';
import { useEffect } from 'react';

const WeatherCountry = ({name}) => {

    // estados
    const [data, setData] = useState([])
    const [err, setErr] = useState(false)
    const [status, setStatus] = useState({status: 200})

    useEffect(() =>{
        const getWeather = async () => {
            const url = `https://restcountries.com/v2/name/${name}`
            const response = await fetch(url).then(res => {setStatus(res.status); return res.json()}).catch(er => setErr(true))
            setData(response)
        }
        name && getWeather()
    },[name])

    return (
        <div className='weather-country'>
            <div className='weather'>
                <div className='name-city'>
                    <h3>{data[0]?.name}</h3>
                </div>
                <div className='container-img-weather'>
                   
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default WeatherCountry