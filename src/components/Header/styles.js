import styled from 'styled-components'

export const ContainerHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    border-bottom: var(--border);
    background-color: var(--bg);
`;

export const SectionHeader = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    @media (max-width: 768px){
        nav{
            display: none;
        }
    }
`;

export const ImageLogo = styled.img`
    width: 6rem;
`;

export const NavLink = styled.a`
    margin: 0 2rem;
    font-size: 1.8rem;
    color: var(--white);
    cursor: pointer;

    &:hover{
        color: var(--main-color);
        border-bottom: 0.1rem solid var(--main-color);
        padding-bottom: 0.5rem;
        font-size: 2rem;
    }
`;

export const IconeHeader = styled.div`
    img{
        width: 2rem;
        margin: 1rem;
        cursor: pointer;

        &:hover{
            width: 3rem;
        }

        &:active{
            opacity: 0.5;
        }
    }

    @media (max-width: 768px){
        display: none;
    }
`;

export const ButtonResponsive = styled.div`
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    div{
        width: 25px;
        height: 3px;
        background-color: var(--white);
        border-radius: 3px;
        transition: 0.3s ease;
    }

    ${({ $open }) => $open && `
        div:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        div:nth-child(2) { opacity: 0; transform: scaleX(0); }
        div:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    `}

    @media (max-width: 768px){
        display: flex;
        
    }
`;

export const MobileNav = styled.div`
    display: none;
    flex-direction: column;
    padding: 1rem 2rem;
    background-color: var(--bg);

    ${NavLink}{
        margin: 0.8rem 0;
        font-size: 1.6rem;
    }

    @media (max-width: 768px){
        display: ${({ $open }) => ($open ? "flex" : "none")};

        ${NavLink}{
            padding: 1.2rem 0;
            font-size: 1.5rem;
        }
    }
`;