import { useState,useEffect } from "react"

export const useFetch = (url) =>{
    const [data, setData] = useState(null)//es el estado donde se alojara el resultado(datos) de la peticion de la api
    const [status, setStatus] = useState(true)//es donde se alojara la informacion si la respuesta esta pediente o no lo esta
    const [err, setErr] = useState(null)//es donde se olajara la infomacion de cualquier error que ocurra sobre la peticion de la api

    useEffect(() => {
        const getFetch = async url =>{
            const res = await fetch(url).then(response => response.json()).catch(error => setErr(error), setStatus(true))
            
            if(res.ok){
                throw{
                    err: true,
                    status: res.status,
                    statusText: !res.statusText ? "¡Hubo un error!" : res.statusText,
                }
            }

            setData(res)
            setStatus(false)
            setErr({err: false})
        }
       url && getFetch(url)
       return;
    },[url])

    return {data, status, err}
}