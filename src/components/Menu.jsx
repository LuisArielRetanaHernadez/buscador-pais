// router-dom
import { Link } from 'react-router-dom';
// estilos del propio Menu
import '../styles/Menu.css'

const Menu = () => {
    
    return (
        <div className='menu'>
            <nav>
                <ul>
                    <li><Link to='/'>Paises</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu