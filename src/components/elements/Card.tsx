import '../../styles/elements/card.css';

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