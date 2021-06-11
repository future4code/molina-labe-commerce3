import styled from 'styled-components'

const ContainerFiltro = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #F3F3F3;
    text-align: left;
    height: 400px;
    border-radius: 3px;
    margin-top: 5px;
`
const ContainerLabel = styled.div`
    color: #333;
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
`

const Titulo = styled.h3`
    text-align: center;
    color: #333;
`

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 0.875em;
`
export {ContainerFiltro, ContainerLabel, Titulo, Label}

