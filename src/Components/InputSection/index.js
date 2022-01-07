import React, {useState, useEffect} from 'react'

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
        <>
            {props.route.postId ? (
                <>
                    <label htmlFor='postid' >Post ID</label>
                    <input onChange={(e)=>setPostSuffix(e.target.value)} name='postid'></input>
                </>) :
                (
                    <></>
                )
            
            }
            {props.route.commentId ? (
                <>
                    <label htmlFor='commentid'> comment Id</label>
                    <input onChange={(e)=>setCommentSuffix(e.target.value)} name='commentid'></input>    
                </>) :
                (
                    <></>
                )
            
            }
            <button onClick={compileSuffix}>Get Data</button>
        </>
    )
}

export default InputSection
