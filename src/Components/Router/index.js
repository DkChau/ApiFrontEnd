import React, {useState} from 'react'
import {
    RouteContainer,
    Route,
    RouteWrapper
} from './RouterElements'

const Router = (props) => {

    const getRoute = (e) =>{
        props.chooseRoute(e.target.value)
    }

    return (
        <RouteWrapper>
            <RouteContainer name='Choose A route' onChange={getRoute}>
                <Route value="" selected disabled hidden>Choose here</Route>
                {props.routes.map((route, index)=>{
                    return <Route key={`route${index}`} value={index}>{route.name}</Route>
                })}
            </RouteContainer>
        </RouteWrapper>
    )
}

export default Router
