import React ,{useState}from 'react'
import TodoForm from './TodoForm'
function EditTodo(){
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
const handleSubmit = ()=>{

}
const projects = [
    { id : 1, name : "personal", numOfTodos : 0 },
    { id : 2, name : "work", numOfTodos : 1 },
    { id : 3, name : "other", numOfTodos : 2 }
]
    return (
        <div className='EditTodo'>
       <TodoForm  handleSubmit={handleSubmit}
                  
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                  
                    projects={projects}
                   
               />
        </div>
    )
}

export default EditTodo