import { Icon as IconSVG } from '@mdi/react';

interface IconProps {
    icon: string;
    size?: number;
    color?: 'text' | 'subtext' | 'title' | 'subtitle';
}


const Icon = (props: IconProps) => {
    const { icon, size, color } = props;

    return(
        <IconSVG 
            path={ icon }
            size={ size ?? 1 }
            color={ color ? `var(--${ color })` : 'var(--subtitle)' }
        />
    )
}

export default Icon;