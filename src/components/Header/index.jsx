import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ContainerHeader,
  SectionHeader,
  ImageLogo,
  NavLink,
  IconeHeader,
  ButtonResponsive,
  MobileNav       
} from './styles.js'
import LogoImg from '../../assets/logo.png'
import ImgCart from '../../assets/icons-cart.png'
import IconsSearch from '../../assets/icons-search.png'

function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (path) => {
    navigate(path)
    setMenuOpen(false) 
  }

  return (
    <ContainerHeader>
      <SectionHeader>
        <ImageLogo src={LogoImg} alt="Logo-Cafeteria" />

        <nav>
          <NavLink onClick={() => handleNavigate("/")}>Home</NavLink>
          <NavLink onClick={() => handleNavigate("/menu")}>Menu</NavLink>
          <NavLink onClick={() => handleNavigate("/avaliacao")}>Avaliações</NavLink>
          <NavLink onClick={() => handleNavigate("/endereco")}>Endereço</NavLink>
        </nav>

        <IconeHeader>
          <img src={ImgCart} alt="Icone-Cart" onClick={() => navigate("/menu")} />
          <img src={IconsSearch} alt="Icone-Search" />
        </IconeHeader>

        <ButtonResponsive
          onClick={() => setMenuOpen((v) => !v)}
          $open={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div></div>
          <div></div>
          <div></div>
        </ButtonResponsive>
      </SectionHeader>

      <MobileNav $open={menuOpen}>
        <NavLink onClick={() => handleNavigate("/")}>Home</NavLink>
        <NavLink onClick={() => handleNavigate("/menu")}>Menu</NavLink>
        <NavLink onClick={() => handleNavigate("/avaliacao")}>Avaliações</NavLink>
        <NavLink onClick={() => handleNavigate("/endereco")}>Endereço</NavLink>
      </MobileNav>
    </ContainerHeader>
  )
}

export default Header

