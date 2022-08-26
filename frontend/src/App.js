import React,{useEffect, useState} from 'react'
import './App.css';

import axios from 'axios'

function App() {
  const [item,setItem]=useState('')
  const [todos,setTodos]=useState([])

  const handleSubmit=()=>{
    if (item ==='') {
      alert('Must not be Empty')
    }else{
      
      axios.post('https://online-amo.herokuapp.com/',{todo:item})
      .then(res=>{
        // setTodos(res.data)
        setItem('')
      }).catch(err=>console.log(err))
    }
  }
useEffect(()=>{
axios.get('https://online-amo.herokuapp.com/').then(res=>{
  setTodos(res.data)
console.log(res.data) 
}).catch(err=>{
console.log(err);
})

},[item])


  return (
    <div className="App">
    
        <div className= "inputDiv">
          
           <input type="text" placeholder='Todo ....'
           value={item}
           name='todo'
           onChange={(e)=>{
            setItem(e.target.value)
           }}
           />
           <button onClick={()=>handleSubmit()}>Add</button> 
        </div>
        <div className='container'>
        {
          todos.map(todo=>{
          return  <div className='displayResulting' key={todo._id}>
        <p className='para'>{todo.todo}</p>
        
        </div>
          })

          }

        </div>
    
     
  
    </div>
  );
}

export default App;
