import React from 'react';
import { Query } from 'react-contentful';
import './App.css';

function Certificate() {
    let orgLogo = "assets/img/logo.png";
    // Get the current pathname e.g. /idofcertificate and remove /
    let id = window.location.pathname.replace("/", "");
    // Get certificate
    return (
        <Query
        contentType={process.env.REACT_APP_CONTENT_TYPE}
        id={id}
        >
            {({data, error, fetched, loading}) => {
                // Check status of request
                if (loading || !fetched) {
                    return <h2>Loading...</h2>;
                }

                if (error){
                    return <p>Error getting certificate.</p>;
                }

                if (!data) {
                    return <p>Certificate does not exist.</p>;
                }
                let certificate = data.fields
                if (certificate === undefined) {
                    return <p>Certificate does not exist.</p>;
                }
                // Check if certificate has a sponsor
                let sponsor = <div></div>;
                if (certificate.sponsor !== undefined) {
                    // Make an image to the right of the org logo with the path to the image from certificate
                    sponsor = <img style={{position: 'absolute', left: '20%', top: '8%', height: '50px'}} src={ certificate.sponsor.fields.file.url } alt="Sponsor of this certificate"/>;
                }

                return (
                    <div className="container" style={{margin: '0px 60px', width: '100%', maxWidth: '100%'}}>
                        <div className="row">
                            <div className="col-auto col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{certificate.type}</h3>
                                        <h4 className="card-title">{certificate.recipient}</h4>
                                        <h6 className="text-muted card-subtitle mb-2"><strong>{ certificate.date }</strong></h6>
                                        <p className="card-text"><strong>{ certificate.description }</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto col-md-6" style={{width: '100%'}}>
                                <img style={{top: '0px', left: '0px', width: '100%', height: '100%'}} src="assets/img/certificate-img.png" alt="Certificate background"/>
                                <div style={{position: 'absolute', left: '60px', top: '10px', width: '50%', height: '90%'}}>
                                    <img style={{position: 'absolute', left: '8%', top: '8%', height: '50px'}} src={ orgLogo } alt="Organization logo"/>
                                    { sponsor } 
                                    <h5 className="text-center" style={{position: 'absolute', width: '70%', top: '25%',}}>Certificate of Appreciation</h5>
                                    <p className="text-center" style={{position: 'absolute', width: '70%', top: '40%'}}>Presented To</p>
                                    <h4 className="text-center" style={{position: 'absolute', width: '70%', top: '50%'}}><strong>{ certificate.recipient }</strong></h4>
                                    <p style={{top: '75%', position: 'absolute', fontFamily: "'Alex Brush', cursive", fontSize: '25px', width: '70%'}}><strong>{ certificate.signature }</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                  );
                }}
        </Query>
        
        );
    }

export default Certificate;
