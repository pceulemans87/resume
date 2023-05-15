import React from 'react';
import './App.css';
import { mdiPrinter } from '@mdi/js'
import ReactToPrint from 'react-to-print';
import Button from './components/Button';
import Details from './components/Details';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Header from './components/Header';
import Link from './components/Link';

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
								
								<Link url='https://github.com/pceulemans87/resume'>Git Repo</Link>			
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