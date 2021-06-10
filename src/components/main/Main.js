import React from 'react';
import Filtros from '../filtro/Filtros';
import Produtos from '../produtos/Produtos';
import { ContainerMain, ContainerProdutos } from './styled'

class Main extends React.Component {
  render() {
    return (
      <ContainerMain>
        <Filtros/>
        <Produtos/>
      </ContainerMain>
    );
  }
}

export default Main;