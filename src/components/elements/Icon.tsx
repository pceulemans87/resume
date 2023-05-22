import { Icon as IconSVG } from '@mdi/react';
import { ColorTypes } from '../../types/ColorTypes';

interface IconProps {
    icon: string;
    size?: number;
    color?: ColorTypes;
}


const Icon = (props: IconProps) => {
    const { icon, size, color } = props;

    return(
        <IconSVG 
            path={ icon }
            size={ size ?? 1 }
            color={ color ? `var(--${ color })` : 'var(--title)' }
        />
    )
}

export default Icon;