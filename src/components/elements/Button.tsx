import { Icon } from '..';
import '../../styles/elements/button.css';

interface ButtonProps {
    label: string;
    icon: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { label, icon, onClick } = props;
    return(
        <div className='button' onClick={ () => onClick }>
            <div className='button-content'>
                <Icon icon={ icon } size={1} />
                { label }
            </div>
        </div>
    )
}

export default Button;