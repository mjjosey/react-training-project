import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const[posts, setPosts] = useState([]);
    const getPosts = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        setPosts(posts);
    }


    useEffect(() => {
            getPosts();
    },[])
    return (
            <>
            <h1>Posts</h1>
               { posts.map(post => (
                <p><Link to={`/posts/${post.id}`}>{post.title}</Link></p>
            ))}
            </>
    )
}
export default Posts;