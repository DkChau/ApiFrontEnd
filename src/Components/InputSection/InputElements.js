import styled from 'styled-components'

export const InputContainer = styled.form`
    display:flex;
    flex-direction: column;
    width:60%;
    margin:0 auto;
    justify-content: center;
    align-items: center;
    /* background:#2c6975; */
    background:#DCE2EC;
    color:black;
    padding:1.25rem 0;
    border:2px solid black;
`
export const InputLabel = styled.label`
    font-size:1.25rem;
    
`
export const Input = styled.input`
    margin:.25rem 0 1.25rem 0;
    height:2rem;
    width:80%;
    border:2px solid black;
`
export const SubmitButton = styled.button`
    width:12.5rem;
    border:none;
    background:#ffffff;
    color:#000000;
    transition:all 0.2s ease;
    border:2px solid black;
    font-weight:500;

    &:disabled{
        background:gray;
        color:white;
    }

`