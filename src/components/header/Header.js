import React from 'react';
import { Cabecalho, Container, Logo, Carrinho } from './styled'
import {FaShoppingCart, FaRocket} from 'react-icons/fa'

class Header extends React.Component {
  render() {
    return (
      <Cabecalho>
        <Container>
          <div>
            <Logo href='/home'>
              <FaRocket/>
              <p>AstroStore</p>
            </Logo>
          </div>

          <div>
            <Carrinho href='/carrinho'>
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