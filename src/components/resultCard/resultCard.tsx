import React from 'react';
import './style.scss'
interface resultCardProps {
    cardName: string,
    tip:number,
}

function ResultCard(props: resultCardProps) {
    return (
        <div className='card-container'>
            <div className="left-side">
                <p className='title'>{props.cardName}</p>
                <p className='subtitle'>/ person</p>
            </div>
            <div className="right-side">
                ${props.tip}
            </div>
        </div>
    );
}

export default ResultCard;