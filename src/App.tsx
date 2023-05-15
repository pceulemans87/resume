import React from 'react';
import './App.css';
import { mdiGithub, mdiPrinter } from '@mdi/js'
import ReactToPrint from 'react-to-print';
import { Button, Details, Experience, Footer, Header, Hobbies, Icon, Link, Skills } from './components';

function App() {
	const appRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {

	}, [appRef])

	return (
		<div className="App" ref={ appRef }>
			<div className='bg-image'>
				<div className="bg-wave">
					<div className='content'>
						<div className='row'>
							<Header />										

							<div className='print'>
								<ReactToPrint
									trigger={ () => 
										<div className='print-btn'>
											<Button label='Print' icon={ mdiPrinter } />
										</div> 
									}
									content={ () => appRef.current }
									documentTitle='cv_pceulemans'
								/>
								
								<div className='git'>
									<Link url='https://github.com/pceulemans87/resume'>
										<Icon icon={ mdiGithub } /> Git Repo
									</Link>	
								</div>		
							</div>
						</div>								

						<div className='col'>
							<Skills />

							<div className='row'>
								<div className='col'>
									<Details />
									<Hobbies />
								</div>
								
								<div className='col'>
									<Experience />
								</div>
							</div>
						</div>

						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;