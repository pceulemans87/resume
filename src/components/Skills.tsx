import { Card, Icon, Typography } from '.';
import '../styles/skills.css';
import { mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJavascript, mdiLanguageTypescript, mdiReact } from '@mdi/js';

const Skills = () => {
    return(
        <div className='skills'>            		
            <Card>
                <div className='skills-content'>
                    <div className='skill'>
                        <Icon icon={ mdiLanguageHtml5 } size={2} color='title'/> 
                        <Typography variant='h3'>HTML5</Typography>
                    </div>
                    <div className='skill'>
                        <Icon icon={ mdiLanguageCss3 } size={2} color='title'/> 
                        <Typography variant='h3'>CSS3</Typography>
                    </div>
                    <div className='skill'>
                        <Icon icon={ mdiLanguageJavascript } size={2} color='title'/> 
                        <Typography variant='h3'>Javascript</Typography>
                    </div>
                    <div className='skill'>
                        <Icon icon={ mdiLanguageTypescript } size={2} color='title'/> 
                        <Typography variant='h3'>Typescript</Typography>
                    </div>
                    <div className='skill'>
                        <Icon icon={ mdiReact } size={2} color='title'/> 
                        <Typography variant='h3'>React</Typography>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Skills;