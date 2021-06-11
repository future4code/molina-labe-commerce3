import styled from 'styled-components'

const Card = styled.div`
    border: solid #d3cfcf 1px;
    margin: 5px 10px;
    max-width: 280px;
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

const Botao = styled.button`
    margin-top: 10px;
    padding: 5px;
    cursor: pointer;
`

export {Card, Title, Text, Image, Font, Botao}