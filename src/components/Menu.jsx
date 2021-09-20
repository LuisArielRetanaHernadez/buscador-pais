import { useRef, useEffect } from 'react';
// react-router-dom
import { Link } from 'react-router-dom';
// estilos del propio Menu
import '../styles/Menu.css'

const Menu = () => {
    
    // useRef
    const menuDesplaze = useRef()

    const scrollMenuDesplaze = () =>{
        if(!menuDesplaze.current){return}
        console.log(window.scrollY, ' y ', menuDesplaze.current.getBoundingClientRect().top + menuDesplaze.current.getBoundingClientRect().height)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollMenuDesplaze)
    },[])
    
    return (
        <div className='menu' ref={menuDesplaze}>
            <nav>
                <ul>
                    <li><Link to='/'>Paises</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu