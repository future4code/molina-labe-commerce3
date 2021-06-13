import React from 'react';
import Filtros from '../filtro/Filtros';
import Produtos from '../produtos/Produtos';
import camisetas from '../../camisetas.json'
import Carrinho from '../carrinho/Carrinho';
import {
  ContainerMain,
  ContainerProdutos,
  TopCards,
  Order,
  TextOrder,
  Container,
  Title
} from './styled'

class Main extends React.Component {
  state = {
    carrinho: []
  }

  componentDidMount() {
    if (localStorage.getItem("produtos")) {
      const camisetasComprados = localStorage.getItem("produtos");
      const novaCompra = JSON.parse(camisetasComprados);
  
      this.setState({carrinho: novaCompra})
    }
  }  
  
  render() {
    let Pagina
    const {pathname} = window.location
    if (pathname === '/'){
      Pagina = (
        <ContainerMain>      
          <Filtros/>
          <div>
            <TopCards>
              <h3>Camisetas</h3>
              <Order>
                <TextOrder>Ordenar por</TextOrder>
                <select>
                  <option value="bigPrice">Maior Preço</option>
                  <option value="smallPrice">Menor Preço</option>
                </select>
              </Order>
            </TopCards>
            <ContainerProdutos >
              {camisetas.map(({id, qtd, img, titulo, preco}) => {
                return (
                  <Produtos
                    id={id}
                    qtd={qtd}
                    img={img}
                    titulo={titulo}
                    preco={preco}
                  />
                ) 
              })}
            </ContainerProdutos>
          </div>
        </ContainerMain>
      )
    } else if (pathname === '/carrinho'){
      Pagina = (
        <Container>
          <Title>Meu carrinho</Title>
            {this.state.carrinho.map(({id, qtd, titulo, preco}) => {
                return (
                  <Carrinho 
                    id={id}
                    qtd={qtd}
                    titulo={titulo}
                    preco={preco}
                  />
                )
              })
            }
        </Container>
      )
    }

    return (
      <>
        {Pagina}
      </>
    );
  }
}

export default Main;
