
import { useState } from 'react';
import { useEffect } from 'react';

const WeatherCountry = ({name}) => {

    // estados
    const [data, setData] = useState([])
    const [err, setErr] = useState(false)
    const [status, setStatus] = useState({status: 200})

    useEffect(() =>{
        const getWeather = async () => {
            const url = `https://api.weatherapi.com/v1/current.json?key=c7db0c19785644e9a26231420210307&&q=${name}&aqi=no`
            const response = await fetch(url).then(res => {setStatus(res.status); return res.json()}).catch(er => setErr(true))
            setData(response)
        }
        name && getWeather()
    },[name])

    return (
        <div className='weather-country'>
            <div className='weather'>
                <div className='name-city'>

                </div>
                <div className='container-img-weather'>
                    <img />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default WeatherCountry