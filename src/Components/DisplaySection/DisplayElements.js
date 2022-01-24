import styled from 'styled-components';

export const DisplayCode = styled.code`
    text-align:start;
    width:100%;
    height:auto;
    max-height:31.125rem;
    font-size:1.25rem;
    margin-top:1.25rem;
    display:flex;
    overflow:auto;
    padding:0 6.25rem;
    font-weight:400;
    margin:0 auto;
`
export const Loading = styled.span`
    text-align:center;
    width:100%;
    padding:3rem 0;
`
export const DisplayWrapper = styled.pre`
    width:85%;
    padding:2rem 0;
    border-radius: 15px;
    font-size:2rem;
    font-weight:600;
    color:#000000;
    background:#E8DACC;
    margin:0 auto;
    text-align:center;
    border:4px solid black;
    white-space:pre-wrap;

    @media (max-width:1200px){
        font-size:1.7rem;
        ${DisplayCode}{
            font-size:.9rem;
            padding:0 4.25rem;
        }
    }
    @media (max-width:768px){
        font-size:1.4rem;
        ${DisplayCode}{
            font-size:.7rem;
            padding:0 2.25rem;
        }
    }
`