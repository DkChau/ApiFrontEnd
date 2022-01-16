import styled from 'styled-components'

export const InputWrapper = styled.div`
    grid-area:input;
    width:100%;
    margin:0 auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background:#9DE0AD;
    border-right:2px solid black;
`
export const DisplayWrapper = styled.div`
    grid-area:display;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    background:#45ADA8 ;
`
export const APIWarning = styled.div`
    padding:2rem 0;
`

export const AppContainer = styled.div`
    display:grid;
    width:100%;
    height:100vh;
    max-height:100vh;
    grid-template-columns: 37.5rem 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'heading heading heading heading' 'input display display display';

    @media (max-width:1200px){
       grid-template-columns:1fr;
       grid-template-rows: auto auto 1fr;
       grid-template-areas: 'heading' 'input' 'display';

       ${InputWrapper}{
           padding:7rem 0;
       }
       ${DisplayWrapper}{
           padding:7rem 0;
       }
    }
`