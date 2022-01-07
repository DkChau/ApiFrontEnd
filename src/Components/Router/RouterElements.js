import styled from 'styled-components'

export const RouteContainer = styled.select`
    background:pink;
`
export const Route = styled.option`
    background:green;
    font-size:20px;
    border:1px solid black;

    &:hover{
        background:red;
    }
`