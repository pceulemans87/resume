import { Icon } from '..';
import '../../styles/elements/button.css';
import { ColorTypes } from '../../types/ColorTypes';

interface ButtonProps {
    color?: ColorTypes;
    label: string;
    icon: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { color, label, icon, onClick } = props;
    return(
        <div className='button' onClick={ () => onClick }>
            <div className={ `button-content${ color ?? ' primary'}` }>
                <Icon icon={ icon } size={1} color={ color ?? 'primary'}/>
                { label }
            </div>
        </div>
    )
}

export default Button;