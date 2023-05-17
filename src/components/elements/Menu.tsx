import { mdiMenu } from '@mdi/js';
import React, { CSSProperties } from 'react'
import '../../styles/elements/menu.css';
import { IconButton, Typography, MenuItem } from '../../components';
import { OutsideAlerter } from '../../hooks';

type MenuItemType = {
    label: string;
    url: string;
    icon?: string;
}

interface MenuProps {
    align?: 'left' | 'right'
    label?: string;
    icon?: string;
    items?: MenuItemType[];
}

const Menu = ( props: MenuProps ) => {
    const { align, label, icon, items } = props;
    const [ isOpen, setIsOpen ] = React.useState(false);

    const menuRef = React.useRef<HTMLDivElement>(null);

    const menuStyles: CSSProperties = {
        display: isOpen ? 'block' : 'none',
        opacity: isOpen ? '1' : '0',
        left: align === 'left' ? '0' : '',
        right: align === 'right' ? '0' : '',
    }

    return(
        <OutsideAlerter handleClose={ () => setIsOpen(false) }>
            <div className='menu' ref={ menuRef }>
                <div className='menu_toggle'>
                    <IconButton 
                        icon={ icon ? icon : mdiMenu } 
                        onClick={() => setIsOpen(!isOpen)} 
                    />
                </div>

                <div 
                    className='menu_items'
                    style={ menuStyles }
                >
                    { label && 
                        <Typography variant='p'>{ label }</Typography> 
                    }

                    { items ? 
                        items.map((item, index) => {
                            return(
                                <MenuItem 
                                    key={ `menu-item-${index}` } 
                                    link={ item.url } 
                                    onClick={ () => setIsOpen(false) }
                                    icon={ item.icon }
                                >
                                    { item.label }
                                </MenuItem>
                            )
                        })
                        : <Typography variant='subtext'>No items available</Typography>
                    }
                </div>
            </div>
        </OutsideAlerter>
    )
}

export default Menu;