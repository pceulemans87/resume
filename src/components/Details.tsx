import Card from './Card';
import Typography from './Typography';
import '../styles/details.css';

const Details = () => {
    return(
        <div className='details'>            
            <Card>
                <div className='details-content'>
                    <Typography variant='h4'>Details</Typography>
                    <div>
                        <Typography variant='p'><span>Name:</span> P. Ceulemans</Typography>
                        <Typography variant='p'><span>Age:</span> 36</Typography>
                        <Typography variant='p'><span>Nationality:</span> Dutch</Typography>
                        <Typography variant='p'><span>Available:</span> Immediately</Typography>
                        <Typography variant='p'><span>Employability:</span> Full-time</Typography>
                        <Typography variant='p'><span>Language:</span> Dutch / English</Typography>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Details;