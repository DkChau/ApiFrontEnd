import React from 'react'
import { DisplayWrapper } from './DisplayElements'

const DisplaySection = (props) => {
    return (
        <DisplayWrapper>
            {props.data}
        </DisplayWrapper>
    )
}

export default DisplaySection
