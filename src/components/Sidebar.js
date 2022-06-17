import React, { useContext, useEffect, useRef } from 'react'
import { TodoContext } from '../context'
function Sidebar({ children }){
const {setSelectedTodo} = useContext(TodoContext)
const sidebarRef=useRef()
useEffect(()=>{
    document.addEventListener('click',handleClick)
    return ()=> document.removeEventListener('click',handleClick)
})
const handleClick = (e)=>{
    if(e.target === sidebarRef.current){
        setSelectedTodo(undefined)
    }
}
    return (
        <div className='Sidebar'>
            {children}
        </div>
    )
}

export default Sidebar