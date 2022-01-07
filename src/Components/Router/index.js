import React, {useState} from 'react'
import {
    RouteContainer,
    Route,
} from './RouterElements'

const Router = (props) => {

    const getRoute = (e) =>{
        if(e.target.tagName==='OPTION'){
            props.chooseRoute(e.target.value)
        }
    }

    return (
        <RouteContainer name='Choose A route' onClick={getRoute}>
            <Route value="" selected disabled hidden>Choose here</Route>
            {props.routes.map((route, index)=>{
                return <Route key={`route${index}`} value={index}>{route.name}</Route>
            })}
        </RouteContainer>
    )
}

export default Router
