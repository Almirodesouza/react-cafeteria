import {ContainerHeader, SectionHeader, ImageLogo, NavLink, IconeHeader} from './styles.js';
import LogoImg from '../../assets/logo.png'
import ImgCart from '../../assets/icons-cart.png'
import IconsSearch from '../../assets/icons-search.png'
import {useNavigate} from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

    return (
        <ContainerHeader>
        <SectionHeader>
          <ImageLogo src={LogoImg} alt="Logo-Cafeteria" />
          <nav>
            <NavLink onClick={() => navigate("/")}>Home</NavLink>
            <NavLink onClick={() => navigate("/menu")}>Menu</NavLink>
            <NavLink onClick={() => navigate("/avaliacao")}>Avaliações</NavLink>
            <NavLink onClick={() => navigate("/endereco")}>Endereço</NavLink>
          </nav>
          <IconeHeader>
            <img src={ImgCart} alt="Icone-Cart" onClick={() => navigate("/menu")}/>
            <img src={IconsSearch} alt="Icone-Search" />
          </IconeHeader>
        </SectionHeader>
      </ContainerHeader>
    )
};

export default Header