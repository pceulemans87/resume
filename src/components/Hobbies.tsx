import '../styles/components/hobbies.css';
import { mdiCamera, mdiMusic, mdiMusicBox } from '@mdi/js';
import { AfterEffects, Illustrator, Photoshop, Premiere } from '../assets';
import { Card, Icon, Typography } from '.';

const Hobbies = () => {
    return(
        <div className='hobbies'>
            <Card>
                <div className='hobbies-content'>
                    <Typography variant='h4'>Hobbies</Typography>
                    
                    <ul className='list'>
                        <li className='list-item'>
                            <Icon icon={ mdiMusic } />
                            <Typography variant='p'>Piano & Guitar</Typography>
                        </li>
                        <li className='list-item'>
                            <Icon icon={ mdiMusicBox } />
                            <Typography variant='p'>Music production</Typography>
                        </li>
                        <li className='list-item'>
                            <Icon icon={ mdiCamera } />
                            <Typography variant='p'>Video animation</Typography>
                        </li>
                        
                        <li className='list-item'>
                            <div className='hobbies-img'>
                                <img src={ Photoshop } alt='adobe_photoshop' />
                                <img src={ Premiere } alt='adobe_premiere' />
                                <img src={ AfterEffects } alt='adobe_after_effects' />
                                <img src={ Illustrator } alt='adobe_illustrator' />
                            </div>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    )
}

export default Hobbies;