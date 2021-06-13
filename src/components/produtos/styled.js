import styled from 'styled-components'

const Card = styled.div`
  margin: 10px;
  max-width: 280px;
  height: 420px;
  display: grid;
  grid-template-rows: 70% 8% 8% 13%;
  transition: 0.4s;
  border: solid #d3cfcf 1px;
  border-radius: 2%;

  :hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h4`
  font-size: 0.75em;
  color: #595959;
  text-align: left;
  margin-left: 5%;
`

const Price = styled.p`
  font-size: 1em;
  font-weight: bold;
  text-align: left;
  margin-left: 5%;
`

const Font = styled.div`
  margin-left: 5%;
`

const Image = styled.img`
  max-width: 100%;
`

const Button = styled.button`
  margin: 10px;
  cursor: pointer;
`

export { Card, Title, Price, Image, Font, Button }