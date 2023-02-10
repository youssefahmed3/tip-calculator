import React from 'react';
import './style.scss'

interface ResetBtnProps {
    buttonName: string,
    resetEvent: React.MouseEventHandler<HTMLDivElement>
}

function ResetBtn(props:  ResetBtnProps) {
    return (
        <div className='btn-reset-container' onClick={props.resetEvent}>
            <p className='btn-name'>{props.buttonName}</p>
        </div>
    );
}

export default ResetBtn;