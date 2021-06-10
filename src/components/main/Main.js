import React from 'react';
import Filtros from '../filtro/Filtros';
import Produtos from '../produtos/Produtos';
import { Container } from './styled'

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Filtros/>
        <Produtos/>
      </Container>
    );
  }
}

export default Main;