import React, {useState, useEffect} from 'react'
import {
    Input,
    InputLabel,
    SubmitButton,
    InputContainer,
} from './InputElements'

const InputSection = (props) => {

    const [postSuffix, setPostSuffix] = useState('')
    const [commentSuffix, setCommentSuffix] = useState('')

    const compileSuffix = (e) =>{
        if(props.route.postId && props.route.commentId){
            props.getData(`post/${postSuffix}/comment/${commentSuffix}`)
        }
        else if(props.route.postId && !props.route.commentId && props.route.comment){
            props.getData(`post/${postSuffix}/comment`)
        }
        else if(props.route.postId && !props.route.commentId){
            props.getData(`post/${postSuffix}`)
        }
        else if(!(Object.keys(props.route).length === 0)){
            props.getData()
        }
        e.preventDefault();
    }
    return (
        <InputContainer onSubmit={compileSuffix}>
            {props.route.postId ? (
                <>
                    <InputLabel htmlFor='postid' >Post ID</InputLabel>
                    <Input required onChange={(e)=>setPostSuffix(e.target.value)} name='postid'></Input>
                </>) :
                (
                    <></>
                )
            
            }
            {props.route.commentId ? (
                <>
                    <InputLabel htmlFor='commentid'> Comment ID</InputLabel>
                    <Input required onChange={(e)=>setCommentSuffix(e.target.value)} name='commentid'></Input>    
                </>) :
                (
                    <></>
                )
            
            }
            <SubmitButton disabled={props.timer}>Get Data</SubmitButton>
        </InputContainer>
    )
}

export default InputSection
