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
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
    justify-content:space-around;
    align-items:center;
`
export const SiteLink = styled.a`
    text-align:center;
    font-size:1.3rem;
    text-decoration:none;
    color:#000000;
    margin:0 10px;
    font-weight:400;

    &:hover{
        border-bottom:3px solid #000000;
    }
`
export const IntroContainer = styled.div`
    width:100%;
    height:6.25rem;
    background:#ffffff ;
    grid-area:heading;
    border-bottom:2px solid black;
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-weight:500;
    color:#000000;

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