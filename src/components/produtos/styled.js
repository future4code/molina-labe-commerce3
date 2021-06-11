import styled from 'styled-components'

const Card = styled.div`
  border: solid #d3cfcf 1px;
  margin: 10px;
  max-width: 280px;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 2%;

  :hover {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h4`
  font-size: .75em;
  color: #595959;
  text-align: left;
`

const Text = styled.p`
  font-size: 1em;
  font-weight: bold;
  text-align: left;
  margin-top: 5px;
`

const Font = styled.div`
  padding: 10px 30px;
`

const Image = styled.img`
  max-width: 100%;
`

const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  cursor: pointer;
`

export { Card, Title, Text, Image, Font, Button }