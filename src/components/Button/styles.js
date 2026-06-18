import styled from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles.js'

export const MainButton = styled.button`
    background-color: ${props => props.theme === "primary" ? "var(--main-color)" : "transparent"};
    color: var(--white);
    padding: 1rem 3rem;
    cursor: pointer;
    font-size: 1.7rem;
    margin-top: 1rem;
    border-radius: 20px;
    display: inline-block;
    border: ${props => props.theme === "primary" ? "none" : "2px solid var(--main-color)"};
    text-transform: none;

    &:hover{
        letter-spacing: 0.1rem;
    }

    &:active{
        opacity: 0.5;
    }
`;