import {useState, useEffect} from 'react';
import Post from './post';

function App({initialCount}) {



  let [state, setState] = useState({
    count:initialCount,
    user:'Bob'
  });
  
  let [posts, setPosts] = useState([
    {
      name:'Super awesome post',
      body: 'The content of the post'
    },
    {
      name:'Js is great',
      body: 'The content of js main post'
    },
  ])


  const restOne = () => {
    setState(prevState => {
      // console.log(prevState.count);
      return{...prevState, count:prevState.count-1}
    })
  }

  const addPost = () => {
    let newPost = {
      name:'Js is great',
      body: 'The content of js main post'
    }
    setPosts([...posts, newPost])
  }

  const removePost = () => {
    setPosts([])
  }

  useEffect(() => {
    console.log('Change on post');
  }, [posts])

  useEffect(() => {
    console.log('Change on state');
  }, [state])

  useEffect(() => {
    console.log('Used as a component that mount - run only at the very beginner as it is not listening to any dependencies');
  }, [])

  return (
    <>
      <h3>User: {state.user}</h3>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({...state, count:state.count+1})}>Add One +1</button>
      <button onClick={restOne}>Rest One -1</button>
      <hr/>
      <div>
        {posts.map((post, i)=>(
          <Post post={post} key={i}/>
        ))}
        <button onClick={addPost}>Add post</button>
        <button onClick={removePost}>Remove Post</button>

      </div>
    </>
  );
}

// function App({initialCount}) {

//   let [count, setCount] = useState(initialCount);


//   const addOne = () => {
//     setCount(count+1);
//   }

//   const restOne = () => {
//     setCount( prevCount => prevCount - 1);
//   }

//   return (
//     <>
//       <h3>Count: {count}</h3>
//       <button onClick={addOne}>Add One +1</button>
//       <button onClick={restOne}>Rest One -1</button>
//       <button onClick={() => setCount(initialCount)}>Reset</button>
//     </>
//   );
// }

export default App;
