import styled from 'styled-components'

const ContainerMain = styled.div`
  max-width: 1200px;
  margin: 140px auto 0 auto;
  display: flex;
`

const ContainerProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 5px;
`

const TopCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0% 5% 5% 5%;
  align-items: center;

  h3 {
    font-size: 2rem;
  }
`

const Order = styled.div`
  display: flex;
  flex-direction: row;

  select {
    height: 1.5rem;
  }
`

const TextOrder = styled.p`
  width: 8vw;
`

const Container = styled.div`
  max-width: 800px;
  padding: 2%;    
  margin: 80px auto;
  min-height: 60vh;
`

const Title = styled.h3`
  font-size: 1.75em;
  margin-bottom: 5%;
`

export {
  ContainerMain,
  ContainerProdutos,
  TopCards,
  Order,
  TextOrder,
  Container,
  Title
}