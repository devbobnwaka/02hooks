import React, {useEffect} from "react";


const Post = ({post}) => {
    useEffect(()=>{
        // console.log('Post created');

        return () => {
            console.log('component exit');
        }
    }, [])
    return(
        <div>
            <div>Name: {post.name}</div>
            <div>Body: {post.body}</div>
            <hr/>
        </div>
    )
}

export default Post;