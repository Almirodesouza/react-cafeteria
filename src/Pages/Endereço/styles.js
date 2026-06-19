import styled from 'styled-components'

export const SectionEndereco = styled.section`
    background-color: var(--bg);
    min-height: 100vh;
    max-width: 100vw;
    margin-top: 6.5rem;
`;

export const BoxEndereco = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

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

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #000;

        div{
            display: flex;
            gap: 16px;
        }

       img{
            cursor: pointer;
            &:hover{
                background-color: var(--main-color);
                border-radius: 50%;
            }

            &:active{
                opacity: 0.5;
            }
       }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

     h6{
                font-size: 2rem;
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