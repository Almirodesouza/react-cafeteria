import {ContainerHeader, SectionHeader, ImageLogo, NavLink, IconeHeader} from './styles.js';
import LogoImg from '../../assets/logo.png'
import ImgCart from '../../assets/icons-cart.png'
import IconsSearch from '../../assets/icons-search.png'

function Header() {
    return (
        <ContainerHeader>
        <SectionHeader>
          <ImageLogo src={LogoImg} alt="Logo-Cafeteria" />
          <nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink>Menu</NavLink>
            <NavLink>Avaliações</NavLink>
            <NavLink>Endereço</NavLink>
          </nav>
          <IconeHeader>
            <img src={ImgCart} alt="Icone-Cart" />
            <img src={IconsSearch} alt="Icone-Search" />
          </IconeHeader>
        </SectionHeader>
      </ContainerHeader>
    )
};

export default Header