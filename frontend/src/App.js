import React from 'react';
import './App.css';

// Import Contentful Client
import { ContentfulClient, ContentfulProvider } from 'react-contentful';

// Import components
import Navbar from './Navbar';
import Certificate from './Certificate';
import Footer from './Footer';

require('dotenv').config()


const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});
 

function App() {
  return (
    <div className="App">
	  	<ContentfulProvider client={contentfulClient}>
			<Navbar />
				<header className="d-flex masthead" style={{backgroundImage: "url('assets/img/bg-masthead.jpg')" }}>
					<Certificate />
				</header>
			<Footer />
		</ContentfulProvider>
    </div>
  );
}

export default App;
