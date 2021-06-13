import React from 'react';
import {Card, Title, Price, Image, Button} from './styled'

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

  alertUser = () => {
    return alert(`${this.props.titulo} 
    (+) Adicionado ao Carrinho`)
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
    
    this.alertUser()
    this.filtrarProdutos()
    console.log(this.state.produtos)
  }

  render() {
    return (
      <Card>
        <Image src={this.props.img}/>
        <Title>{this.props.titulo}</Title>
        <Price>R$ {this.props.preco},00</Price>
        <Button
          onClick={this.addCarrinho}
        >Add ao carrinho</Button>
      </Card>
    );
  }
}

export default Produtos;