import React from 'react'
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";
import {useState} from 'react';
// import { Todo } from "./Todo"

export default function Header(props) {
    const [search,setSearch] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        console.log(search)
        if(!search){
            alert("Search can't be blank");
        }
        else{
            setSearch("");
            {props.todo.length === 0 ? alert("you haven't any todo yet") :
                props.todo.map((todo) => {
                    if(todo.title === search)
                        alert("Title : "+search+"\n\nDescription : "+todo.desc);
                    else
                        return ""
                    
                })
            }
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                        {props.searchBar ? <form className="d-flex" onSubmit={submit}>
                            <input className="form-control me-2" value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>:"No Search bar"}
                    </div>
                </div>
            </nav>
        </div>
    )
}
Header.defaultProps ={
    title:"To-Do Lists"
}

Header.propTypes={
    title:PropTypes.string,
    searchBar:PropTypes.bool.isRequired
}