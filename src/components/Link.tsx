import React from 'react';

interface LinkProps {
    children: React.ReactNode;
    target?: '_blank' | '_self'; 
    url: string;
}

const Link = ( props: LinkProps ) => {
    const { children, target, url } = props;
    return(
        <a href={ url } target={ target ?? '_blank' } rel='noopener noreferrer'>
            { children }
        </a>
    )
}

export default Link;