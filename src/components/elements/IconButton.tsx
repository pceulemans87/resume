import { Icon } from '..';
import '../../styles/elements/icon-button.css';

interface IconButtonProps {
    icon: string;
    onClick?: () => void;
    size?: number;
}

const IconButton = (props: IconButtonProps) => {
    const { icon, onClick, size } = props;
    return(
        <div className='icon-button' onClick={ onClick }>

            <Icon 
                icon={ icon } 
                size={ size ?? 1 } 
            />
        </div>
    )
}

export default IconButton;