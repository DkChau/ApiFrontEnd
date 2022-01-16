import React, {useState} from 'react';
import { APIWarning, AppContainer, DisplayWrapper, InputWrapper } from './AppElements';
import DisplaySection from './Components/DisplaySection';
import InputSection from './Components/InputSection';
import IntroSection from './Components/IntroSection';
import Router from './Components/Router'
import {routes} from './Data';

function App() {

    const [route,setRoute] = useState({})
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(false)


    const throttleApiCall = (fn,timeout=3000) => { 
        return (...args) => {
            if (!timer) {
                setTimer(true)
                fn.apply(Object.create(null), args);
                setTimeout(() => {
                    setTimer(false) 
                }, timeout);
            }
        };
    }

    const chooseRoute = (num) => {
        setRoute(routes[num])
    }

    const getData = (url='post') => {
        setLoading(true)
        fetch(`https://dcblogapi.herokuapp.com/api/${url}`)
        .then(result=>{
            return result.json()
        })
        .then (response =>{
            var myJSONString = JSON.stringify(response,null,4,'\n');
            var myEscapedJSONString = myJSONString.replace(/\\n/g, " ")
            setData(myEscapedJSONString)
        })
        .then(()=>{
            setTimeout(()=>{
                setLoading(false)
            },1000)
        })
    }

    return (
        <AppContainer>
            <IntroSection/>
            <InputWrapper>
                <APIWarning>API Requests can only be made once every 3 seconds</APIWarning>
                <Router routes={routes} chooseRoute = {chooseRoute}/>
                <InputSection getData={throttleApiCall(getData,3000)} route={route}/>
            </InputWrapper>
            <DisplayWrapper>
                <DisplaySection loading={loading} heading={route.name} data={data}/>
            </DisplayWrapper>
        </AppContainer>
    );
}

export default App;
