import React from 'react';
import {Card, Title, Text, Image, Font, Botao} from './styled'

class Produtos extends React.Component {
  
  render() {
    return (
      <Card>
        <Image src={this.props.img}/>
        <Font>
          <Title>{this.props.titulo}</Title>
          <Text>R$ {this.props.preco},00</Text>
          <Botao>Add ao carrinho</Botao>
        </Font> 
      </Card>

    );
  }
}

export default Produtos;