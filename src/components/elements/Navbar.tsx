import React from 'react';
import Menu from './Menu';
import '../../styles/elements/navbar.css';
import { mdiHome } from '@mdi/js';
import { IconButton, Link } from '../../components';

type NavItem = {
    label: string;
    url: string;
}

interface NavbarProps {
    items: NavItem[];
}

const Navbar = ( props: NavbarProps ) => {
    const { items } = props;
    const [ isActive, setIsActive ] = React.useState(0);
    return(
        <div className='navbar'>
            <div className='navbar_items'>
                <Link url='/'>
                    <IconButton icon={ mdiHome } size={1} />
                </Link>
                
                { items.map((item, index) => {
                    return (
                        <a 
                            key={ `navbar-item-${ index }` }
                            className={`navbar_item ${ isActive === index ? 'navbar_active' : ''}`}
                            href={ item.url }
                            onClick={ () => setIsActive( index )}
                        >
                            { item.label }
                        </a>
                    )
                })}                

                <div className='navbar_collapsed'>
                    <Menu items={ items } align='right'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;