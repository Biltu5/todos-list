import React from 'react'
import { Todo } from "./Todo"
export const Todos = (props) => {
    let myStyle={
        minHeight:"50vh",
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">To-Do Lists</h3>
            {props.todo.length === 0 ? "No todo to display" :
                props.todo.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
