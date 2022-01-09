import styled from 'styled-components'

export const AppContainer = styled.div`
    display:grid;
    width:100%;
    height:100vh;
    max-height:100vh;
    grid-template-columns: 600px 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'heading heading heading heading' 'input display display display';
`
export const InputWrapper = styled.div`
    grid-area:input;
    width:100%;
    margin:0 auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background:#FEFAD4;
    border-right:2px solid black;
`
export const DisplayWrapper = styled.div`
    grid-area:display;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    background:#F1828D ;
`
export const APIWarning = styled.div`
    padding:30px 0;
`