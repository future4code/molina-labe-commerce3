import React from 'react';
import {
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
} from './styled'
import { FaRocket } from 'react-icons/fa'

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Main>
          <ContainerLogo>
            <Logo>
              <FaRocket/>
              <Title>AstroStore</Title>
            </Logo>
            <Text>
              Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature 
              from 45 BC, making it over 2000 years old. Richard McClintock, 
              a Latin professor at Hampden-Sydney College in Virginia, looked 
              up one of the more obscure Latin words, consectetur, from a Lorem 
              Ipsum passage, and going through the cites of the word in classical 
              literature, discovered the undoubtable source.
            </Text>
          </ContainerLogo>
          


          <Contact>
            <Title>Fale Conosco</Title>
            <Text>Email: contato@astroshop.com.br</Text>
            <Text>Telefone: (00) 00000-0000</Text>
            <Text>WhatsApp: (00) 00000-0000</Text>
            <Text>Endereço: Rua Astro Shop, $$$</Text>
          </Contact>

          <SocialMidia>
            <Title>Redes Socias</Title>
            <IconSocial>
              <Link target='_blank' href='https://www.facebook.com/'>
                <Image src='https://i.imgur.com/JUPmaOu.png' />
              </Link>
              <Link target='_blank' href='https://www.instagram.com/'>
                <Image src='https://i.imgur.com/saULyJy.png' />
              </Link>
              <Link target='_blank' href='https://www.twitter.com/'>
                <Image src='https://i.imgur.com/xa5j4oi.png' />
              </Link>
              <Link target='_blank' href='https://www.youtube.com/'>
                <Image src='https://i.imgur.com/wFnzvpf.png' />
              </Link>
            </IconSocial>
          </SocialMidia>

        </Main>

        <Line />

        <Bottom>
          <p>© Copyright 2021 - Todos os direitos reservados a AstroStore</p>
        </Bottom>

      </Container>
    );
  }
}

export default Footer;