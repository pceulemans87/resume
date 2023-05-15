import Card from './Card';
import Typography from './Typography';
import Icon from './Icon';
import '../styles/footer.css';
import { mdiEmail, mdiLinkedin, mdiPhone } from '@mdi/js';
import Link from './Link';

const Footer = () => {
    return(
        <div className='footer'>            
            <Card>
                <div className='footer-content'>
                    <div className='motivation'>
                        <Typography variant='h4'>Lets do this!</Typography>
                        <div>
                            <Typography variant='p'>
                                I'm looking forward to contribute to your team!
                                With plenty of positive energy, good work ethic and natural curiosity, 
                                I will always be ready for the task at hand. Lets create some exceptional digital experiences for your users!
                            </Typography>
                        </div>
                    </div>

                    <div className='contact'>
                        <Typography variant='h4'>Get in Touch!</Typography>
                        <ul className='list'>
                            <li className='list-item'>
                                <Icon icon={ mdiPhone } />
                                <Typography variant='p'>+31 (0) 6 21 67 24 79</Typography>
                            </li>
                            <li className='list-item'>
                                <Icon icon={ mdiEmail } />
                                <Link url='mailto:pceulemans@gmail.com'>pceulemans@gmail.com</Link>
                            </li>
                            <li className='list-item'>
                                <Icon icon={ mdiLinkedin } /> 
                                <Link url='linkedin.com/in/paul-ceulemans-951481276'>Follow me on LinkedIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Footer;