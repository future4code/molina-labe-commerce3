import React from 'react';
import Filtros from '../filtro/Filtros';
import Produtos from '../produtos/Produtos';
import camisetas from '../../camisetas.json'
import {
  ContainerMain,
  ContainerProdutos,
  TopCards,
  Order,
  TextOrder
} from './styled'


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
        <div>
          <TopCards>
            <h3>Camisetas</h3>
            <Order>
              <TextOrder>Ordenar por</TextOrder>
              <select>
                <option value="maiorPreco">Maior Preço</option>
                <option value="menorPreco">Menor Preço</option>
              </select>
            </Order>
          </TopCards>
          <ContainerProdutos >
            {Cards}
          </ContainerProdutos>
        </div>
      </ContainerMain>
    );
  }
}

export default Main;
