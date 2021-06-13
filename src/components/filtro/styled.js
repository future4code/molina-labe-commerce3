import styled from 'styled-components'

const ContainerFiltro = styled.div`
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #F3F3F3;
    text-align: left;
    height: 400px;
    border-radius: 3px;
    margin-top: 5px;
    color: #333;
`
const ContainerCheckBox = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: center;

    input{
        margin-right: 7px;
        cursor: pointer;
    }
`

const ContainerLabel = styled.div`
    margin-top: 10px;
`

const Titulo = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`

const Label = styled.label`
    font-weight: bold;
    font-size: 0.875em;
`
export {ContainerFiltro, ContainerLabel, Titulo, Label, ContainerCheckBox}

