import React from 'react';
import './style.scss'

interface inputBoxProps {
    prefix: JSX.Element,
    title: string,
    type?: "number",
    getValue: React.ChangeEventHandler<HTMLInputElement>
}

function inputBox(props: inputBoxProps) {
    return (
        <div className="container">
            <p className="title">{props.title}</p>
            <div className='input-container'>
                <span className="prefix">{props.prefix}</span>
                <input type={props.type} className="input-field" placeholder='0' onChange={props.getValue}/>
            </div>
        </div>
    );
}

export default inputBox;