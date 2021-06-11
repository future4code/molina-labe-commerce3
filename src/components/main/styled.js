import styled from 'styled-components'

const ContainerMain = styled.div`
  max-width: 1200px;
  margin: 100px auto 0 auto;
  display: flex;
  border: 1px solid red;
`

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
`

export { ContainerMain, ContainerProdutos }