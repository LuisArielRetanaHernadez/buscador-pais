import { Link } from "react-router-dom"

// estilos del propio HeaderCountry
import '../styles/HeaderCountry.css'


const HeaderCountry = () => {

    return (
        <header className='header-country'>
            <div className='span-text-country'>
                <h2>¿Tienes un pais en mente?</h2>
            </div>
            <div className='link-country-form'>
                <Link to='/CountryForm'>Buscador de pais</Link>
            </div>
        </header>
    )
}

export default HeaderCountry