import { Link } from "react-router-dom"

// styles del propio Country
import '../styles/Country.css'

const Country = ({flag, name}) => {

    return (
        <div className='country'>
            <div className='flag-of-country'>
                <img src={flag} alt={`bandera de ${name}`} />
            </div>
            <div className='info-country'>
                <div className='info'>
                    <h3>{name}</h3>
                    <Link to={`/details/${name}`}>Ver mas</Link>
                </div>
            </div>
        </div>
    )
}
export default Country;