import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"><img src={logo} alt="logo" style={{width: '60px', height: '60px'}} /></Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/works">Works</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav