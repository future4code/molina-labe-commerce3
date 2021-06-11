import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {Container, Main, Title, Text, Price, Button} from './styled'

class Carrinho extends React.Component {
    render () {
        return (
            <Container>
                <Title>Meu carrinho</Title>
                <Main>
                    <Text>Quantidade</Text>
                    <Text>Nome</Text>
                    <Price> R$,00 </Price>
                    <Button> <FaTrash/> </Button>
                </Main>

            </Container>
        )
    }
    
}

export default Carrinho
