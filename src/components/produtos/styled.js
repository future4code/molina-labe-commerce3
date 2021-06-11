import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    display: flex;
    margin: 10px;
    box-shadow: 2px 2px 5px darkgray ;
    
    width: 500px;
    height: 400px;

`

const Card = styled.div`
    border: solid #d3cfcf 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    

`

const Title = styled.h1`

    font-size: 100%;
    color: #595959;
    

`




const Text = styled.h3`
    
    font-size: 110%;
    color: black;
    margin: 10px 0;
    
    
    
  

`

const Font = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-align: justify;
    width: 80%;
    
    
    
`

const Image = styled.img`
   
    width: 90%;
    
`





export {Container, Card, Title, Text, Image, Font}