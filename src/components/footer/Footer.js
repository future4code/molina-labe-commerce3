import React from 'react';
import {
  Container,
  Main,
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
} from './styled'
import { FaRocket } from 'react-icons/fa'

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Main>
          <div>
            <div>
              <Title>AstroStore</Title>
            </div>
            <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
          </div>
          <Contact>
            <Title>Fale Conosco</Title>
            <TextContact>
              <Text><span>Email:</span> contato@astroshop.com.br</Text>
              <Text><span>Telefone:</span> (00) 00000-0000</Text>
              <Text><span>WhatsApp:</span> (00) 00000-0000</Text>
              <Text><span>Endereço:</span> Rua Astro Shop, $$$</Text>
            </TextContact>
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
          <Text>© Copyright 2021 - Todos os direitos reservados a AstroStore</Text>
        </Bottom>
      </Container>
    );
  }
}

export default Footer;