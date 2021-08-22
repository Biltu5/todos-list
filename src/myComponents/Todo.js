import React from 'react'

export const Todo = (props) => {
    return (
        <div>
            <h4>{props.todo.title}</h4>
            <div className="container" style={{display:"flex",flexDirection:"row"}}>
                <div style={{width:"80%"}}><p>{props.todo.desc}</p></div>
                <div><p >{props.todo.date}</p></div>
            </div>
            <button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
            <hr/>
        </div>
    )
}
