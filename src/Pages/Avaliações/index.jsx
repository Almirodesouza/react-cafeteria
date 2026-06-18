import Header from '../../components/Header';
import Button from '../../components/Button';
import { ContainerAvaliação, Review, BoxReviewst, Box, ImgCustomer, Feedback } from './styles.js'

import FeedbackOne from '../../assets/feedback-1.png'
import FeedbackTwo from '../../assets/feedback-2.png'
import FeedbackThree from '../../assets/feedback-3.png'
import StarImg from '../../assets/star.png'
import Quote from '../../assets/quote-img.png'

function Avaliacao() {
    return (
        <ContainerAvaliação>
            <Header />
            <Review>
                <h2>Avaliação do <span>Café</span></h2>
                <BoxReviewst>

                    <Box>
                        <img src={Quote} alt="Avaliação-1" />
                        <p>Melhor café que já tomei! O cappuccino é cremoso, o ambiente é aconchegante e o atendimento é impecável. Virei cliente fiel!</p>
                        <ImgCustomer src={FeedbackOne} alt="foto-cliente" />
                        <h3>Ângelo Souza</h3>
                        <div>
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                        </div>
                    </Box>

                    <Box>
                        <img src={Quote} alt="Avaliação-2" />
                        <p>Um lugar incrível para trabalhar ou relaxar. O latte macchiato é simplesmente perfeito, e o espaço tem um charme todo especial.</p>
                        <ImgCustomer src={FeedbackTwo} alt="foto-cliente" />
                        <h3>Graziele Almeida Barbosa</h3>
                        <div>
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                        </div>
                    </Box>

                    <Box>
                        <img src={Quote} alt="Avaliação-3" />
                        <p>Fui indicado por um amigo e não me arrependo. O café coado artesanal tem um sabor único. Com certeza voltarei mais vezes!</p>
                        <ImgCustomer src={FeedbackThree} alt="foto-cliente" />
                        <h3>Almiro de Souza</h3>
                        <div>
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                            <img src={StarImg} alt="Star" style={{ width: '3rem' }} />
                        </div>
                    </Box>
                </BoxReviewst>

                <Feedback>
                    <h3>Deixe seu <span>Feedback</span></h3>
                    <Button type="button" theme="primary" >Enviar</Button>
                </Feedback>
            </Review>
        </ContainerAvaliação>
    )
}

export default Avaliacao