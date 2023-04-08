import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        let lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
        
        
    }
    return (
        <div style={{height:'50px' ,position:'sticky',
        top:'0'}}>

       {props.alert && <div className={`alert alert-${props.alert.type} role="alert`}>
            <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
        </div>}
        </div>
    )
}