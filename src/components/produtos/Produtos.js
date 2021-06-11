import React from 'react';
import {Card, Title, Text, Image, Font, Button} from './styled'

class Produtos extends React.Component {
  
  render() {
    return (
      <Card>
        <Image src={this.props.img}/>
        <Font>
          <Title>{this.props.titulo}</Title>
          <Text>R$ {this.props.preco},00</Text>
          <Button>Add ao carrinho</Button>
        </Font> 
      </Card>

    );
  }
}

export default Produtos;