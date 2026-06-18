import styled from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles.js'

export const ContainerMenu = styled.section`
    background-color: var(--bg);
    min-height: 100vh;
    max-width: 100vw;
    margin-top: 6.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
            font-size: 4rem;
            color: var(--main-color);
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 2rem;

            span{
                color: var(--white);
                text-transform: uppercase;
            }
        }
`;

export const SectionMenu = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
`;

export const BoxMenu = styled.div`
    text-align: center;
    border: var(--border);
    padding: 4rem;
    cursor: pointer;

    &:hover{
        background-color: var(--white);
    }

    &:hover>*{
        color: var(--black);
    }

    img{
        height: 10rem;
    }

    h3{
        color: var(--white);
        font-size: 2rem;
        padding: 1rem 0;
        text-transform: none;
    }
`;

export const DivPrice = styled.div`
    color: var(--white);
    font-size: 2.5rem;
    padding: 0.5rem 0;

    span{
        font-size: 1.5rem;
        text-decoration: line-through;
        font-weight: 100;
    }
`;



