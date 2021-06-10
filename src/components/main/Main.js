import React from 'react';
import Filtros from '../filtro/Filtros';
import Produtos from '../produtos/Produtos';
<<<<<<< HEAD
import { Container } from './styled'
=======
import { ContainerMain, ContainerProdutos } from './styled'
>>>>>>> master

class Main extends React.Component {
  render() {
    return (
      <ContainerMain>
        <Filtros/>
        <ContainerProdutos>
          <Produtos/>
        </ContainerProdutos>
      </ContainerMain>
    );
  }
}

export default Main;