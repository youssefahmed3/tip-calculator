import React from 'react';
import './style.scss'

interface tipButtonProps {
    tipValue: number
    handleClick: React.MouseEventHandler<HTMLDivElement>
}


function Btn(props: tipButtonProps) {
    return (
        <div className='btn-container' onClick={props.handleClick}>
            <p className='btn-name'>{props.tipValue}%</p>
        </div>
    );
}

export default Btn;