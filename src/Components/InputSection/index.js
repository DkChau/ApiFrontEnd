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

    const compileSuffix = () =>{
        if(props.route.postId && props.route.commentId){
            props.getData(`post/${postSuffix}/comment/${commentSuffix}`)
        }
        else if(props.route.postId && !props.route.commentId && props.route.comment){
            props.getData(`post/${postSuffix}/comment`)
        }
        else if(props.route.postId && !props.route.commentId){
            props.getData(`post/${postSuffix}`)
        }
        else{
            props.getData()
        }
    }
    return (
        <InputContainer>
            {props.route.postId ? (
                <>
                    <InputLabel htmlFor='postid' >Post ID</InputLabel>
                    <Input onChange={(e)=>setPostSuffix(e.target.value)} name='postid'></Input>
                </>) :
                (
                    <></>
                )
            
            }
            {props.route.commentId ? (
                <>
                    <InputLabel htmlFor='commentid'> comment Id</InputLabel>
                    <Input onChange={(e)=>setCommentSuffix(e.target.value)} name='commentid'></Input>    
                </>) :
                (
                    <></>
                )
            
            }
            <SubmitButton onClick={compileSuffix}>Get Data</SubmitButton>
        </InputContainer>
    )
}

export default InputSection
