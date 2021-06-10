import React from 'react';
import { Cabecalho, Container, Logo, Carrinho } from './styled'
import {FaShoppingCart, FaRocket} from 'react-icons/fa'

class Header extends React.Component {
  render() {
    return (
      <Cabecalho>
        <Container>
          <div>
            <Logo href='/'>
              <FaRocket/>
              <p>AstroShop</p>
            </Logo>
          </div>

          <div>
            <Carrinho href='/'>
              <FaShoppingCart/>  
              <p>Cart()</p>
            </Carrinho>
          </div>
        </Container>
      </Cabecalho>
    );
  }
}

export default Header;