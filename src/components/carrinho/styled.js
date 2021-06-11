import styled from 'styled-components'

const Container = styled.div`
    max-width: 800px;
    padding: 2%;    
    margin: 80px auto;
    height: 80vh;
`
const Main = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 6%;
    align-items: center;

`

const Title = styled.h3`
    font-size: 1.75em;

`

const Text = styled.p`

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
export {Container, Main, Title, Text, Price, Button}