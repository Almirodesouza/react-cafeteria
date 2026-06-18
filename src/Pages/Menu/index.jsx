import Header from '../../components/Header';
import Button from '../../components/Button';
import { ContainerMenu, SectionMenu, BoxMenu, DivPrice } from './styles.js'

import MenuOne from '../../assets/menu-1.png'
import MenuTwo from '../../assets/menu-2.png'
import MenuThree from '../../assets/menu-3.png'
import MenuFour from '../../assets/menu-4.png'
import MenuFive from '../../assets/menu-5.png'
import MenuSix from '../../assets/menu-6.png'

function Menu() {
    return (
        <ContainerMenu>
            <Header />
            <h2>Nosso <span>Menu</span></h2>
            <SectionMenu>

                <BoxMenu>
                    <img src={MenuOne} alt="Menu-1"/>
                    <h3>Café Coado Artesanal</h3>
                    <DivPrice>R$ 9,90 <span>R$ 14,90</span></DivPrice>
                    <Button type="button" theme="primary">Adicionar ao carrinho</Button>
                </BoxMenu>

                <BoxMenu>
                    <img src={MenuTwo} alt="Menu-2"/>
                    <h3>Cappuccino Italiano</h3>
                    <DivPrice>R$ 14,90 <span>R$ 19,90</span></DivPrice>
                    <Button type="button" theme="primary">Adicionar ao carrinho</Button>
                </BoxMenu>

                <BoxMenu>
                    <img src={MenuThree} alt="Menu-3"/>
                    <h3>Latte Macchiato</h3>
                    <DivPrice>R$ 16,90 <span>R$ 22,90</span></DivPrice>
                    <Button type="button" theme="primary">Adicionar ao carrinho</Button>
                </BoxMenu>

                <BoxMenu>
                    <img src={MenuFour} alt="Menu-4"/>
                    <h3>Espresso Duplo</h3>
                    <DivPrice>R$ 8,90 <span>R$ 12,90</span></DivPrice>
                    <Button type="button" theme="primary">Adicionar ao carrinho</Button>
                </BoxMenu>

                <BoxMenu>
                    <img src={MenuFive} alt="Menu-5"/>
                    <h3>Mocha Cremoso</h3>
                    <DivPrice>R$ 18,90 <span>R$ 24,90</span></DivPrice>
                    <Button type="button" theme="primary">Adicionar ao carrinho</Button>
                </BoxMenu>

                <BoxMenu>
                    <img src={MenuSix} alt="Menu-6"/>
                    <h3>Flat White</h3>
                    <DivPrice>R$ 15,90 <span>R$ 20,90</span></DivPrice>
                    <Button type="button" theme="primary">Adicionar ao carrinho</Button>
                </BoxMenu>

            </SectionMenu>

        </ContainerMenu>

    )
}

export default Menu