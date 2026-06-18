import Header from '../../components/Header'
import { SectionEndereco, BoxEndereco, Footer, Contact } from './styles.js'

import FacebookImg from '../../assets/facebook-img.png'
import InstagramImg from '../../assets/instagram-img.png'
import WhatsappImg from '../../assets/whatsapp-img.png'

function Endereco() {
    return (
        <SectionEndereco>
            <Header />
            <BoxEndereco>
                <h2>Endereço <span>Cafeteria</span></h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2875469218934!2d-42.6862662!3d-13.017351900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75cd1298358a645%3A0x7b7ed72afba5e7f5!2sPadaria%20e%20Cafeteria%20COFFEE%20TIME!5e0!3m2!1spt-BR!2sbr!4v1781737005403!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </BoxEndereco>

            <Footer>
                <Contact>
                    <h6>Nossas <span>Redes</span></h6>
                    <div>
                        <img src={FacebookImg} alt="Facebook"/>
                        <img src={InstagramImg} alt="Instagram"/>
                        <img src={WhatsappImg} alt="Whatsapp"/>
                    </div>
                </Contact>
            </Footer>
        </SectionEndereco>
    )
}

export default Endereco