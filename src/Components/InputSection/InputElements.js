import styled from 'styled-components'

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:60%;
    margin:0 auto;
    justify-content: center;
    align-items: center;
    background:#FCD0BA;
    color:black;
    padding:20px 0;
    border:2px solid black;
`
export const InputLabel = styled.label`
    font-size:20px;
    
`
export const Input = styled.input`
    margin:5px 0 20px 0;
    height:30px;
    width:80%;
    border:2px solid black;
`
export const SubmitButton = styled.button`
    width:200px;
    border:none;
    background:white;
    color:black;
    transition:all 0.2s ease;
    border:2px solid black;
    font-size:14px;
    font-weight:500;

    &:hover{
        transform:scale(1.03);
    }

`