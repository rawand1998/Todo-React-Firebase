import React,{useState,useContext} from "react";
import { CheckCircleFill,Circle ,ArrowClockwise,Trash} from "react-bootstrap-icons";
import firebase from "../firebase"
import {TodoContext} from '../context'
function Todo({ todo }) {
  const [hover, setHover] = useState(false)
  const {setSelectedTodo,selectedTodo} = useContext(TodoContext)
 const  handledeleteTodo = (todo)=>{
    deleteTodo()
    if(selectedTodo===todo){
        setSelectedTodo(undefined)
    }
  }
const deleteTodo = ()=>{
firebase.firestore().collection('todo').doc(todo.id).delete()
}
const checked =()=>{
    firebase.firestore().collection('todo').doc(todo.id).update({checked:!todo.checked})
}
  return (
      <div className='Todo'>
          <div
              className="todo-container"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
          >
              <div className="check-todo">
                  {
                      todo.checked ?
                      <span className="checked">
                          <CheckCircleFill color="#bebebe" />
                      </span>
                      :
                      <span className="unchecked" onClick={()=>checked()}>
                          <Circle color={todo.color} />
                      </span>
                  }
              </div>
              <div className="text" onClick={()=>setSelectedTodo(todo)}>
                  <p style={{color : todo.checked ? '#bebebe' : '#000000'}}>{todo.text}</p>
                  <span> - {todo.project}</span>
                  <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
              </div>
              <div className="add-to-next-day">
                  {
                      todo.checked &&
                      <span>
                          <ArrowClockwise />
                      </span>
                  }
              </div>
              <div className="delete-todo" onClick={()=>handledeleteTodo(todo)}>
                  {
                      (hover || todo.checked) &&
                      <span>
                          <Trash />
                      </span>
                  }
              </div>
          </div>
      </div>
  )
}

export default Todo;
