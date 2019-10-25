import React from 'react';

const Button =(props)=>{
    const {name ,clickbtn}=props;
    return  <button className="btn btn-success cus-btn" onClick={()=>clickbtn()}>{name}</button>
}
export default Button;