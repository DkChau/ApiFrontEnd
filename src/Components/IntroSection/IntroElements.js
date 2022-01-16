import styled from 'styled-components'

export const IntroWrapper = styled.div`
    height:100%;
    width:80%;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.div`
    font-size:2rem;
`
export const LinkWrapper = styled.div`
    display:grid;
    width:500px;
    height:100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-content:center;
    align-items:center;
`
export const SiteLink = styled.a`
    text-align:center;
    font-size:1.3rem;
`
export const IntroContainer = styled.div`
    width:100%;
    height:6.25rem;
    background:#E5FCC2 ;
    grid-area:heading;
    border-bottom:2px solid black;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-weight:500;
    color:black;

    @media (max-width:1200px){
        ${IntroWrapper}{
            width:95%;
        }
        ${Logo}{
            font-size:1.2rem;
            width:100%;
        }
        ${LinkWrapper}{
            width:300px;
        }
        ${SiteLink}{
            font-size:.8rem;
        }
    }
`