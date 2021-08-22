import React from "react";

export const Footer = () => {
  let footerStyle = {
    fontSize: "1rem",
    left: 0,
    bottom: 0,
    position: "relative",
    width: "100%",
    margin: "40 0 0 0"
  };
  return (
    <footer className="bg-dark text-light py-3 fixed-bottom" style={footerStyle}>
        <p  style={{color:"white",textAlign:"center",alignItems:"center"}}>Copyright &copy; mytodolist.com</p>
    </footer>
    
  );
};
