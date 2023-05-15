import Logo from '../assets/logo.png';
import LogoRing from '../assets/logo_ring.png';
import Typography from './Typography';
import '../styles/header.css';

const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <div className='logo-img'><img src={ Logo } alt='Epic Web Dev Logo' /></div>
                <div className='logo-ring'><img src={ LogoRing } alt='Epic Web Dev Logo' /></div>                
            </div>
            <div className='header-text'>
                <Typography variant='h1'>Paul Ceulemans</Typography>
                <Typography variant='h2'>Dedicated, Experienced & Reliable</Typography>
            </div>
        </div>
    )
}

export default Header;