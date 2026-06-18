import styled from 'styled-components'
import { GlobalStyles } from '../../styles/GlobalStyles.js'
import ImgHome from '../../assets/home-img.jpg'

export const Container = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    background-color: var(--bg);
`;

export const HomeContainer = styled.div`
    background-image: url(${ImgHome});
    background-size: cover;
    background-position: center;
    margin-top: 3rem;
`;

export const Section = styled.section`
   display: flex;
   min-height: 100vh;
   align-items: center;
`;

export const HomeSection = styled.div`
    max-width: 60rem;
     padding: 0 4rem;

        h3{
            color: var(--white);
            font-size: 6rem;
            text-transform: none;
        }

        p{
            color: var(--white);
            font-size: 2rem;
            font-weight: 200;
            line-height: 1.8rem;
            padding: 1rem 0;
            text-transform: none;
        }
`;

export const SectionAbout = styled.section`

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

export const Row = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--black);
    gap: 1.5rem;
`;

export const DivImg = styled.div`

    img{
        width: 600px;
    }
`;

export const DivInfo = styled.div`
    padding: 2rem;

    h3{
        font-size: 3rem;
        color: var(--white);
        text-transform: none;
    };

    p{
        font-size: 1.6rem;
        font-weight: 100;
        color: var(--white);
        padding: 1rem 0;
        line-height: 1.8rem;
        text-transform: none;
    }
`;


