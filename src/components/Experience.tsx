import Card from './Card';
import Typography from './Typography';
import '../styles/experience.css';
import Link from './Link';

const Experience = () => {
    return(
        <div className='experience'>            
            <Card>
                <div className='experience-content'>
                    <Typography variant='h4'>Work Experience</Typography>
                    <div>
                        <div className='experience_title'>
                            <Link url='https://kwantum.nl'>
                                <Typography variant='h5'>Kwantum Business Office</Typography>
                            </Link>
                            <Typography variant='subtext'>2011 - 2013</Typography>
                        </div>
                        <div className='experience-description'>
                            <Typography variant='p'>
                                Responsible for the administrative and technical support of the
                                distribution center as well as improving document processing, archiving, planning, 
                                stockmanagement and delivery control.
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <div className='experience_title'>
                            <Link url='https://nl.kuehne-nagel.com'>
                                <Typography variant='h5'>Kuehne & Nagel</Typography>
                            </Link>
                            <Typography variant='subtext'>2014 - 2015</Typography>
                        </div>
                        <div className='experience-description'>
                            <Typography variant='p'>
                                Created multiple department specific widgets <span>(HTML, CSS, JS)</span> for use within 
                                their <Link url='https://www.jivesoftware.com'>Jive Intranet Software</Link> environment.
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <div className='experience_title'>
                            <Link url='https://bumbal.eu'>
                                <Typography variant='h5'>Bumbal Transport Software</Typography>
                            </Link>
                            <Typography variant='subtext'>2016 - Present</Typography>
                        </div>
                        <div className='experience-description'>
                            <Typography variant='p'>
                                Responsible for maintaining their current SAAS application and refactoring it to a modern day React application.
                                Implementing and updating features (UI / UX) using HTML, CSS, Javascript, jQuery, Typescript, React, React-Native, React-Toolkit, NextJs, MUI, TailWind, Bootstrap, Handlebars and more.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Experience;