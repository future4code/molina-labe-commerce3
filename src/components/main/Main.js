import React from 'react';
import Filtros from '../filtro/Filtros';
import Produtos from '../produtos/Produtos';
import camisetas from '../../camisetas.json'
import { ContainerMain, ContainerProdutos } from './styled'


class Main extends React.Component {
  
  render() {
    const Cards = camisetas.map(({img, titulo, preco}) => {
      return (
        <Produtos
          img={img}
          titulo={titulo}
          preco={preco}
        />
      ) 
    })

    return (
      <ContainerMain>
      
        <Filtros/>
        <ContainerProdutos >
          {Cards}
        </ContainerProdutos>
      </ContainerMain>
    );
  }
}

export default Main;
