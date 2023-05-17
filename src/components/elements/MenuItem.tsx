import React from 'react'
import '../../styles/elements/menu-item.css';
import { Icon } from '../../components';

interface MenuItemProps {
    children: React.ReactNode;
    className?: 'string'  
    icon?: string;
    link: string;
    onClick?: () => void;
    target?: '_blank' | '_self' | '_parent';
}

const MenuItem = ( props: MenuItemProps ) => {
    const { children, icon, link, onClick, target } = props;

    return(
        <div className='menu_item'>
            <a 
                href={ link } 
                target= { target ? target : '_self' }
                rel='noopener noreferrer'
                onClick={ onClick }
            >
                { icon && 
                    <Icon 
                        icon={ icon } 
                        size={ 1 }
                    />
                }
                { children }
            </a>
        </div>
    )
}

export default MenuItem;