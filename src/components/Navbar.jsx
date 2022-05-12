import { Linked } from '../sass/styled/Styled.styled'
import Logo from '../assets/img/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Linked to="/">
        <img src={Logo} alt="" />
      </Linked>
      

      <ul className="navigation">
        <Linked to="/">
          <li>Home</li>
        </Linked>

        <Linked to="">
          <li>Room</li>
        </Linked>

        <Linked to="">
          <li>Blog</li>
        </Linked>

        <Linked to="">
          <li>FAQs</li>
        </Linked>

        <Linked to="">
          <li>How to find us</li>
        </Linked>

        <Linked to="">
          <li>About Us</li>
        </Linked>

        <Linked to="">
          <li>Contact Us</li>
        </Linked>

        <Linked to="">
          <li>Franchise</li>
        </Linked>
        <li><i className="fa-solid fa-bars" ></i></li>
      </ul>
    </nav>
  )
}