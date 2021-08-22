import React,{useState} from 'react';

export const AddToDo = (props) => {
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const submit = (e)=>{
        // stop reloading of the page 
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can't be blank");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <h3 className="text-center">Add to To-Do</h3>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="Todo's Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}
