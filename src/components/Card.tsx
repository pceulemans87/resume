import React from 'react';
import '../styles/card.css';

interface CardProps {
    children: React.ReactNode;
}

const Card = (props: CardProps) => {
    const { children } = props;

    return (
        <div className='card'>
            <div className='card-content'>
                { children }
            </div>
        </div>
    )
}

export default Card;