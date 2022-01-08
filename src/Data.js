export const routes = [
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