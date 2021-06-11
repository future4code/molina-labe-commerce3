import styled from 'styled-components'

const Cabecalho = styled.header`
  background-color: #0B3D91;
  position: fixed; 
  top: 0; 
  width: 100%;
`

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`
const Logo = styled.a`
  font-size: 1.5em;
  color: #FC3D21;
  font-weight: bold;
  display: flex;
  align-items: center;

  p{
    margin-left: 7px;
  }
`

const Carrinho = styled.a`
  font-size: 1em;
  color: #FC3D21;
  font-weight: bold;
  transition: .2s;
  display: flex;
  align-items: center;

  :hover{
    color: #fc3e21d0;
  }

  p{
    margin-left: 7px;
  }
`

export { Cabecalho, Container, Logo, Carrinho }