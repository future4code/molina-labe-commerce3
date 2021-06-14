import styled from 'styled-components'

const Container = styled.div`
  /* position: relative;
  bottom: 0;*/
  /* max-width: 100%;  

  /* display: flex;
  flex-direction: column;
  align-items: center; */
  padding: 15px 60px 5px 60px;
  background-color: var(--azul);
  margin-top: 50px;
`

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ContainerLogo = styled.div`
  font-size: 1.5em;
  color: #FC3D21;
  flex: 2;
  
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--vermelho);
`

const Text = styled.p`
  font-size: 0.8rem;
  color: white;
  text-align: justify;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  flex: 1;
`

const SocialMidia = styled.div`
  flex: 1;
  text-align: center;
`

const IconSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Link = styled.a`
  margin-left: 7px;
`

const Image = styled.img`
  width: 30px;
  margin-top: 5%;
`

const Line = styled.hr`
  margin-top: 1%;
  height: 0.01rem;
  border: none;
  background: rgba(17, 120, 242, 0.5);
  width: 95%;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 7px auto;

  p{
    margin-top: 3px;
    font-size: 0.8rem;
    color: white;
    text-align: center;
  }
`

export {
  Container,
  Main,
  ContainerLogo,
  Logo,
  Title,
  Text,
  Contact,
  SocialMidia,
  IconSocial,
  Link,
  Image,
  Line,
  Bottom
}