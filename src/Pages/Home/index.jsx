import { Container, HomeContainer, Section, HomeSection, SectionAbout, Row, DivImg, DivInfo } from './styles'
import Header from '../../components/Header'
import Button from '../../components/Button'
import ImgCafe from "../../assets/cafe-img.jpg"

function Home() {

  return (
    <Container>
      <Header />
      <HomeContainer id="home">
        <Section>
          <HomeSection>
            <h3>Desperte Seus Sentidos com o Melhor Café da Região</h3>
            <p>Cada xícara é preparada com grãos selecionados e torrados artesanalmente.
              Venha descobrir por que somos a cafeteria favorita de quem valoriza
              um café de verdade — feito com cuidado, servido com carinho.
            </p>
            <Button  type="button" >Experimente Agora</Button>
          </HomeSection>
        </Section>
      </HomeContainer>

      <SectionAbout id="about">
        <h2>Sobre <span>Nós</span></h2>
        <Row>
          <DivImg>
            <img src={ImgCafe} alt="Sobre Nós" />
          </DivImg>
          <DivInfo>
            <h3>O que faz nosso café especial?</h3>
            <p>Na Cafena, cada xícara conta uma história. Trabalhamos com grãos
              selecionados de origem única, torrados artesanalmente para preservar
              os aromas e sabores que fazem a diferença em cada gole. Nossa equipe
              é apaixonada por café de verdade — por isso, do preparo ao atendimento,
              tudo é feito com cuidado e dedicação. Aqui, você não toma apenas um café.
              Você vive uma experiência.</p>
            <Button type="button" >Saiba Mais</Button>
          </DivInfo>
        </Row>
      </SectionAbout>
    </Container>
  )
}

export default Home
