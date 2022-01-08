import React, {useState, useEffect} from 'react';
import { AppContainer, DisplayWrapper, InputWrapper } from './AppElements';
import DisplaySection from './Components/DisplaySection';
import InputSection from './Components/InputSection';
import IntroSection from './Components/IntroSection';
import Router from './Components/Router'
import {routes} from './Data';

function App() {

    const [route,setRoute] = useState({})
    const [data, setData] = useState('')

    //Can just disable the button...
    const throttleApiCall = (fn,timeout=3000) => { 
        let timer;
        return (...args) => {
            if (!timer) {
                fn.apply(this, args);
                timer = setTimeout(() => {
                    timer = undefined;
                }, timeout);
            }
        };
    }

    const chooseRoute = (num) => {
        setRoute(routes[num])
    }

    const getData = (url='post') => {
        fetch(`https://dcblogapi.herokuapp.com/api/${url}`)
        .then(result=>{
            return result.json()
        })
        .then (response =>{
            var myJSONString = JSON.stringify(response,null,4,'\n');
            var myEscapedJSONString = myJSONString.replace(/\\n/g, " ")
            setData(myEscapedJSONString)
        })
    }

    const throttleData = throttleApiCall(getData,3000)

    return (
        <AppContainer>
            <IntroSection/>
            <InputWrapper>
                <Router routes={routes} chooseRoute = {chooseRoute}/>
                <InputSection getData={throttleData} route={route}/>
            </InputWrapper>
            <DisplayWrapper>
                <DisplaySection data={data}/>
            </DisplayWrapper>
        </AppContainer>
    );
}

export default App;
