import styled from 'styled-components'

const ContainerFiltro = styled.div`
    margin-top: 10vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 15vh;
    cursor: pointer;
    background-color: #F3F3F3;
    text-align: left;
    height: 400px;
`
const ContainerLabel = styled.div`
    color: #333;
    padding: 20px 20px 20px 0px;
    display: grid;
`

const Titulo = styled.h3`
    color: #333;
`

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 8px;
`
export {ContainerFiltro, ContainerLabel, Titulo, Label}

