
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    
    return (
    <div className='section'>
        <a href="#">Nombre del Ecommerce</a>
        <a href="#"><ul>Item 1</ul></a>
        <a href="#"><ul>Item 2</ul></a>
        <a href="#"><ul>Item 3</ul></a>
        <a href="#"><ul>Item 4</ul></a>
        <a href=""><CartWidget /></a>
        
    </div>
  )
}

export default NavBar