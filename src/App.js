import React, {useState, useEffect} from 'react';
import InputSection from './Components/InputSection';
import Router from './Components/Router'

function App() {

    const routes = [
        {
            name:'Get all Posts',
            commentId:false,
            postId:false,
            comment:false,
        },
        {
            name:'Get Specific Post',
            commentId:false,
            postId:true,
            comment:false,
        },
        {
            name:'Get all Comments on a Post',
            commentId:false,
            postId:true,
            comment:true,
        },
        {
            name:'Get specific Comment on a Post',
            commentId:true,
            postId:true,
            comment:false,
        },
    ]

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
        console.log(url);
        fetch(`https://dcblogapi.herokuapp.com/api/${url}`)
        .then(result=>{
            return result.json()
        })
        .then (response =>{
            console.log(JSON.stringify(response))
            setData(JSON.stringify(response))
        })
    }

    const throttleData = throttleApiCall(getData,3000)

    return (
        <React.Fragment>
            <Router routes={routes} chooseRoute = {chooseRoute}/>
            <InputSection getData={throttleData} route={route}/>
        </React.Fragment>
    );
}

export default App;
