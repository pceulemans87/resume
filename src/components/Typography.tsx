import React from 'react';
import '../styles/typography.css';

interface TypographyProps {
    children: React.ReactNode;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'subtext';
}

const Typography = (props: TypographyProps) => {
    const { children, variant } = props;
    function renderTypography() {
        switch( variant ) {
            case 'h1': return (
                <h1 className={ `typography typography-${variant}` }>{ children }</h1>
            )
            case 'h2': return (
                <h2 className={ `typography typography-${variant}` }>{ children }</h2>
            )
            case 'h3': return (
                <h3 className={ `typography typography-${variant}` }>{ children }</h3>
            )
            case 'h4': return (
                <h4 className={ `typography typography-${variant}` }>{ children }</h4>
            )            
            case 'h5': return (
                <h5 className={ `typography typography-${variant}` }>{ children }</h5>
            )
            case 'p': return (
                <p className={ `typography typography-${variant}` }>{ children }</p>
            )
            case 'subtext': return (
                <p className={ `typography typography-${variant}` }>{ children }</p>
            )
        }
    }
    return(
        renderTypography()
    )
}

export default Typography;