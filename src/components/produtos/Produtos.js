import React from 'react';
import {Container, Card, Title, Text, Image, Font} from './styled'


class Produtos extends React.Component {
  
  render() {
    return (
    <Container>
      
      <Card>
        <Image src='https://www.todoespacoonline.com/w/wp-content/uploads/2016/03/camiseta-deep-purple-masculina-300x300.png'/>
        
        <Font>
          <Title>Nome da Camiseta</Title>
          <Text>Preço</Text>
        </Font>

        
      </Card>

      <Card>

        <Image src='https://www.todoespacoonline.com/w/wp-content/uploads/2020/02/camiseta-larino-americano-feminina.png'/>
        
        <Font>
          <Title>Nome da Camiseta</Title>
          <Text>Preço</Text>
        </Font>

      </Card>
    
    </Container>
    
      
    );
  }
}

export default Produtos;