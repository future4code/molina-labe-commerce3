import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { Main, Price, Button, Line } from './styled'

class Carrinho extends React.Component {
  render() {
    return (
      <>
        <Main>
          <p><span>ID </span> {this.props.id}</p>
          <p><span>Qtd </span> {this.props.qtd}</p>
          <p><span>Nome:</span> {this.props.titulo}</p>
          <Price>R$ {this.props.preco},00</Price>
          <Button><FaTrash/></Button>
        </Main>
        <Line/>
      </>
    )
  }

}

export default Carrinho
