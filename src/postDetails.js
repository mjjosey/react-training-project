import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const PostDetails = () => {
const [details, setDetails] = useState({});
const params = useParams();

const navigate = useNavigate();

console.log(params)


    const PostDetail = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        console.log(res, 'res')
        const data = await res.json();
        console.log(data)
        setDetails(data)
    }

    useEffect(()=> {
        PostDetail()
}, [])

    return (
        <>
        <button className='btn btn-primary' onClick={()=>navigate(-1)}>Go Back</button>
          <p>{details.id}</p>
          <p>{details.title}</p>
          <p>{details.body}</p>
        </>
    )
}

export default PostDetails;