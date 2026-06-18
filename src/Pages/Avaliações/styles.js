import styled from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles.js'

export const ContainerAvaliação = styled.section`
    background-color: var(--bg);
    min-height: 100vh;
    max-width: 100vw;
    margin-top: 6.5rem;
`;

export const Review = styled.div`
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

export const BoxReviewst = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
`;

export const Box = styled.div`
    border: var(--border);
    text-align: center;
    padding: 3rem 2rem;

    p{
        color: var(--white);
        font-size: 1.5rem;
        padding: 2rem 0;
        line-height: 1.8;
        font-weight: 100;
        text-transform: none;
    }

    h3{
        color: var(--white);
        font-size: 1.5rem;
        padding: 1rem 0;
        text-transform: none;
    }
`;

export const ImgCustomer = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
`;

export const Feedback = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    

    h3{
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


