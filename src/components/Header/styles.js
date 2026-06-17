import styled from 'styled-components'
import {GlobalStyles} from '../../styles/GlobalStyles.js'

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
        margin:1rem;
        cursor: pointer;

        &:hover{
            width: 3rem;
        }

        &:active{
            opacity: 0.5;
        }
    }
`;