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
    carrinho: [],
    nomeBusca:'',
    filtro:''
  }

  onChangeBusca = (event)=>{
    this.setState({
      nomeBusca: event.target.value
    })
  }

  onChangeFiltro = (event)=>{
    this.setState({
      filtro: event.target.value
    })
  }

  ordenaLista = ()=>{
    switch (this.state.filtro) {
      case 'smallPrice':
        camisetas.sort((a, b)=> a.preco - b.preco)
        break
      case 'bigPrice':
        camisetas.sort((a, b)=> b.preco - a.preco)
        break
      default:
        camisetas.sort()
        break
    }
  }

  componentDidMount() {
    if (localStorage.getItem("produtos")) {
      const camisetasComprados = localStorage.getItem("produtos");
      const novaCompra = JSON.parse(camisetasComprados);
  
      this.setState({carrinho: novaCompra})
    }
  }  
  
  render() {
    this.ordenaLista()

    let Pagina
    const {pathname} = window.location
    if (pathname === '/'){
      Pagina = (
        <ContainerMain>      
          <Filtros 
            onChangeBusca={this.onChangeBusca}
            value={this.state.nome}
          />
          <div>
            <TopCards>
              <h3>Camisetas</h3>
              <Order>
                <TextOrder>Ordenar por</TextOrder>
                <select value={this.state.filtro} onChange={this.onChangeFiltro}>
                  <option>Selecione</option>
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
