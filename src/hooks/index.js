import { useState,useEffect } from "react";
import firebase from "../firebase"

export function useTodos() {
    const [todos,setTodos] = useState([])
    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('todo')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            
              
            })
            setTodos(data)
            console.log("data todos",data)
          
        })

        return () => unsubscribe()
    },[])

    return todos
}
export  function useProjects(todos){
    const [projects,setProjects] = useState([])
    function calculateNumOfTodos(projectName, todos){
        console.log("todos",todos)
        // return todos.filter( todo => todo.projectName === projectName).length
    }
    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                const projectName = doc.data().name
               
                return {
                    id : doc.id,
                   name:projectName,
                   numOfTodos:calculateNumOfTodos(projectName, todos)

                }
            })
            setProjects(data)
            console.log(data,"data projects")
        })

        return () => unsubscribe()
    },[])

    return projects
}


