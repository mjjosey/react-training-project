import React, { useEffect, useState } from "react";



const FunctionalComp = (props) => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const [posts, setPosts] = useState([]);
    const [size, setSize] = useState(window.innerWidth);
    const [text, setText] = useState('val');
    const [errors, setErrors] = useState({ userName: '', email: ''})

    // const [userName, setUserName]= useState('');
    // const [email, setEmail]= useState('');
    const [person, setPerson] = useState({ userName: '', email: ''})
    const [people, setPeople] = useState([]);
    const firstValue = text || 'first value'; // left side value is true executes left value or left side value is false executes right value
    const secondValue = text && 'second value'; // left side value is true executes right value or left side value is false won't execute any value

    const checkSize = () => {
        setSize(window.innerWidth);
    };


    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    })

    // const getPosts = async() => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const posts = await response.json();
    //     setPosts(posts);
    // }


//     useEffect(() => {
//         // if (count > 1){
// // http request we need empty array parameter
//             // document.title = `New Messages(${count})`;
//             getPosts();
//         // }
//     },[])

    useEffect(() => {
        // document.title = `New Messages(${count})`;
        document.title = `New Messages(${value})`;
        
    }, [value])
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({
            ...person,
            [name]: value
        })
     
    }



    const handleSubmit = (e) => {
     e.preventDefault();
     setPeople([
         ...people,
         person
     ])
     if(person.userName.trim() === ""){
        setErrors({
           ...errors, 
           userName : 'Username is required'
        })
    } else if(person.email.trim() === ""){
       setErrors({
           ...errors, 
           email : 'email is required'
        })
   } else {
       setErrors({
           userName : '',
           email: ''
        })
   }
  
    }
    console.log(errors)


    return (
        <>
            <p>Functinal</p>
            {/* {
                count > 0 ||  <p>{count}</p>
                }
                <h1>{firstValue}</h1>
                <h2>{secondValue}</h2> */}
            
            {/* <p>{value}</p>  */}
            {/* <p>{props.name}</p>
            <p>{props.item1}</p>
            <p>{props.item2}</p>
            <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
            <button onClick={() => setValue(value + 1)} className="btn btn-warning">Increment value</button>
            <button onClick={handleDecrement} className="btn btn-secondary">Decrement</button> */}
            {/* { posts.map(post => (
                <p>{post.title}</p>
            ))} */}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='userName'>Name</label>
                    <input type='text' id='userName' name='userName' value={person.userName} onChange={(e) => handleChange(e)}/>
                    {errors.userName ? <p className='text-danger'>{errors.userName}</p> : null}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email'value={person.email} onChange={(e) => handleChange(e)}/>
                    {errors.email ? <p className='text-danger'>{errors.email}</p> : null}
                </div>
                <button type='submit'>Add</button>
            </form>

            {/* {people.map(peop => (
                <div key = {peop.userName}>
                <p>{peop.userName}</p>
                <p>{peop.email}</p>
                </div>
            ))} */}

        </>

)

}

export default FunctionalComp;