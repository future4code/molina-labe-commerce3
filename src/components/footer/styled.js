import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--azul);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  width: 90vw;
  margin-top: 1%;
  margin-bottom: 1%;
`

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1.5em;
  color: #FC3D21;
`

const Title = styled.h1`
  font-size: 1.5rem;
  color: var(--vermelho);
  margin-bottom: 2%;
`

const Text = styled.p`
  font-size: 0.8rem;
  color: white;
  text-align: justify;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextContact = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
`

const SocialMidia = styled.div`
  display: flex;
  flex-direction: column;
`

const IconSocial = styled.div`
  height: 10vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Link = styled.a`
  margin-left: 2%;
`

const Image = styled.img`
  height: 45%;
  margin-top: 5%;
`

const Line = styled.hr`
  margin-top: 1%;
  height: 0.01rem;
  border: none;
  background: rgba(17, 120, 242, 0.5);
  width: 90%;
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  margin: 1%;
`

export {
  Container,
  Main,
  Logo,
  Title,
  Text,
  Contact,
  TextContact,
  SocialMidia,
  IconSocial,
  Link,
  Image,
  Line,
  Bottom
}