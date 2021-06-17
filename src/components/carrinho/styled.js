import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2%;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

const Price = styled.p`
  font-weight: bold;
  font-size: 24px;
  color: var(--azul);
`

const Button = styled.button`
  border:none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  background-color: var(--vermelho);
  padding: 0.8% 1.3%;
  border-radius: 10%;
`

const Line = styled.hr`
  margin-bottom: 2%;
  height: 0.01rem;
  border: none;
  background: rgba(17, 120, 242, 0.5);
  width: 100%;
`

export { Main, Price, Button, Line }