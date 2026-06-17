import styled from 'styled-components'
import {GlobalStyles} from '../../styles/GlobalStyles.js'

export const MainButton = styled.button`
    background-color: var(--main-color);
    color: var(--white);
    padding: 1rem 3rem;
    cursor: pointer;
    font-size: 1.7rem;
    margin-top: 1rem;
    border-radius: 20px;
    display: inline-block;

    &:hover{
        letter-spacing: 0.1rem;
    }

    &:active{
        opacity: 0.5;
    }
`;