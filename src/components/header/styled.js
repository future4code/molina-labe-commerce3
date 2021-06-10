import styled from 'styled-components'

const Cabecalho = styled.header`
  background-color: #0B3D91;
  position: fixed; 
  top: 0; 
  width: 100%;
`

const Container = styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.a`
  font-size: 1.5em;
  color: #FC3D21;
  font-weight: bold;
`

const Carrinho = styled.a`
  font-size: 1.125em;
  color: #FC3D21;
  font-weight: bold;
`

export { Cabecalho, Container, Logo, Carrinho }