// hooks del react dom
import React,{ useState, useEffect, useRef } from 'react';
// componentes globales
import Country from '../components/Country'
import HeaderCountry from '../components/HeaderCountry';
import Menu from '../components/Menu'
import Loading from '../components/Loading'
// styles del propio CountryGeneral
import '../styles-pages/CountryGeneral.css'

const CountryGeneral = () => {

    // estados
    const [countryAll, setCountryAll] = useState([])
    const [countryLimit, setCountryLimit] = useState([]);
    const [err, setErr] = useState(false)
    const [numberPage, setNumberPage] = useState(1)

    // useRef
    const elementVisiblite = useRef();

    // AQUI ES DONDE SE HACE LA PETICION FETCH PARA LLAMAR A TODOS LOS PAISES
    useEffect(() => {
        const getCountryAll = async () => {
            const url = 'https://restcountries.com/v2/all'
            const response = await fetch(url).then(res => res.json()).catch(er => setErr(true))
            setCountryAll(response)
        }
        getCountryAll()
    },[])
    
    // AQUI ES DONDE LE HACEMOS NEXT PARA MOSTRAR MAS ELEMENTOS 
    const scrollNextPagination = () => {
        // Ese if es para evitar una falla en el getBoundingClientRect() ya que al momento de rendericionar a una vista de la pagina, el getBoundingClientRect() se pone como valor null en el ref
        if(!elementVisiblite.current){return}
        // Bueno aqui tomas el viewport del nevagador 
        // despues tomamos la distanica del top del navegador asi el elemento elementVisiblite ( "elementVisiblite.current.getBoundingClientRect().top" ) y despues tomamos su altura del elementVisiblite ( "elementVisiblite.current.getBoundingClientRect().height" )
        // depues de tomar esas dos propiedades del elementVisiblite las sumamos y redondeamos la suma ( "Math.round(elementVisiblite.current.getBoundingClientRect().top + elementVisiblite.current.getBoundingClientRect().height)" )
        // bueno eso se debe ya que el elementVisiblite se encuentra en la parte debajo de la pagina y cuando el " Math.round(elementVisiblite.current.getBoundingClientRect().top + elementVisiblite.current.getBoundingClientRect().height) ""
        // tome la misma medida que el viewport se desplazara mas elementos(paises)
        if(window.innerHeight === Math.round(elementVisiblite.current.getBoundingClientRect().top + elementVisiblite.current.getBoundingClientRect().height)){
            setNumberPage(preve => preve + 1)
        }
    }

    // LLAMA LA FUNCION SCROLLNEXTPAGINATION CADA VEZ QUE EL USUARIO HAGA SCROLL EN LA PAGIANA
    useEffect(() => {
        window.addEventListener('scroll', scrollNextPagination)
    },[])

    // AQUI ES DONDE SE PONEN LOS SIGUIENTES ELEMENTOS (PAISES) CUANDO EL NUMBERPAGE CAMBIE 
    useEffect(() => {
        const indexLastRende = numberPage * 15
        if(indexLastRende <= countryAll.length){
            const elementsRende = countryAll.slice(0, indexLastRende)
            setCountryLimit(elementsRende)
        }
    },[numberPage, countryAll, err])

    return (
       <section>
           <Menu />
           <HeaderCountry />
           <h2>Explora algunos paises </h2>
           <div className="country-general">
            {!err ? countryLimit.length > 0 ? countryLimit.map(data => <Country key={data.name} name={data.name} flag={data.flag} />) : <Loading />   : 'err, no hay resultados '}
           </div>
           <div ref={elementVisiblite} className='efect-scroll'></div>
       </section> 
    )
}
export default CountryGeneral;