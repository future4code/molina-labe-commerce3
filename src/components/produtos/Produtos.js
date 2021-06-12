import React from 'react';
import {Card, Title, Text, Image, Font, Button} from './styled'

class Produtos extends React.Component {
  state = {
    produtos: []
  }

  componentDidUpdate = () => {
    const produtos = this.state.produtos;
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }

  filtrarProdutos = () => {
    this.state.produtos.filter(({id, qtd, titulo, preco}) => {
      if (this.props.id === id){
        this.setState({
          produtos: [{
            id: id,
            qtd: this.props.qtd + qtd,
            titulo: titulo,
            preco: preco
          }]
        })
      }
    })
  }

  addCarrinho = () => {
    const novaCompra = {
      id: this.props.id,
      qtd: this.props.qtd,
      titulo: this.props.titulo,
      preco: this.props.preco
    }
    
    const novoCarrinho = [...this.state.produtos, novaCompra]

    
    this.setState({produtos: novoCarrinho})
    
    this.filtrarProdutos()
    console.log(this.state.produtos)
  }

  render() {
    return (
      <Card>
        <Image src={this.props.img}/>
        <Font>
          <Title>{this.props.titulo}</Title>
          <Text>R$ {this.props.preco},00</Text>
          <Button
            onClick={this.addCarrinho}
          >Add ao carrinho</Button>
        </Font> 
      </Card>
    );
  }
}

export default Produtos;