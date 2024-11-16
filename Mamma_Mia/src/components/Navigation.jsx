import { Link } from 'react-router-dom';
import { Container, Navbar, Button } from 'react-bootstrap';
import imgLogo from '../assets/Logo.png';
import { useContext } from 'react';
import { Context } from '../Contexts/PizzaContext';

export default function Navigation() {
  const { totalCart, monedaLocal } = useContext(Context);
  const token = false; // simula token de inicio sesión

  return (
    <Navbar sticky="top">
      <Container>
        <Link to={'/Mamma_Mia/home'} className="logo">
          <img src={imgLogo} alt="Logo Pizza" />
          <span>Pizzeria Mamma Mia!</span>
        </Link>
        <div>
          <Button as={Link} to="/">🍕 Home</Button>
          {token ? (
            <>
              <Button>🔓 Profile</Button>
              <Button>🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button>🔐 Login</Button>
              <Button>🔐 Register</Button>
            </>
          )}
          <Button as={Link} to="/carrito">🛒 Total: {monedaLocal(totalCart)}</Button>
        </div>
      </Container>
    </Navbar>
  );
}


