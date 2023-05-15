import React from 'react';
import '../styles/hobbies.css';
import Typography from './Typography';
import Icon from './Icon';
import { mdiCamera, mdiFileMusic, mdiFileVideo, mdiMusic, mdiMusicBox } from '@mdi/js';
import AE from '../assets/ae.png';
import AI from '../assets/ai.png';
import PS from '../assets/ps.png';
import PR from '../assets/pr.png';
import Card from './Card';

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
                                <img src={ PS } alt='adobe_photoshop' />
                                <img src={ PR } alt='adobe_premiere' />
                                <img src={ AE } alt='adobe_after_effects' />
                                <img src={ AI } alt='adobe_illustrator' />
                            </div>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    )
}

export default Hobbies;