import React from 'react'
import { DisplayWrapper, DisplayCode,  Loading} from './DisplayElements'

const DisplaySection = (props) => {

    return (
        <DisplayWrapper>
            {!props.data && !props.loading ? 'Choose a route to obtain data' :
                <>
                    API DATA
                    <DisplayCode>
                        {props.loading ? <Loading>Loading...</Loading> : props.data}
                    </DisplayCode>
                </>}
        </DisplayWrapper>
    )
}

export default DisplaySection
