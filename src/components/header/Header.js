import React from 'react';
import { Cabecalho, Container, Logo, Carrinho } from './styled'

class Header extends React.Component {
  render() {
    return (
      <Cabecalho>
        <Container>
          <div>
            <Logo href='/'>AstroStore</Logo>
          </div>

          <div>
            <Carrinho href='/'>Cart ()</Carrinho>
          </div>
        </Container>
      </Cabecalho>
    );
  }
}

export default Header;