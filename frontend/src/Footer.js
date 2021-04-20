import React from 'react';
import './App.css';

// Functions to open different endpoints based on the social network
function getFacebookLink() {
    openSharePage('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
}

function getLinkedInLink() {
    openSharePage('https://www.linkedin.com/sharing/share-offsite/?url=' + window.location.href);
}

function getTwitterShare() {
    openSharePage("https://twitter.com/intent/tweet?url=" + window.location.href);
}

// Function to open a popup window with a specific dimension
function openSharePage(url) {
    window.open(
        url, 
        'width=626,height=436'
    ); 
}

let noBorder = {
    border: '0px'
}

function Footer() {
  return (<div>
    <footer className="footer text-center">
        <div className="container">
            <ul className="list-inline mb-5">
                <li className="list-inline-item">&nbsp;<button className="text-white social-link rounded-circle" style={noBorder} onClick={ getFacebookLink }><i className="icon-social-facebook"></i></button>
            </li>
                <li className="list-inline-item">&nbsp;<button className="text-white social-link rounded-circle" style={noBorder} onClick={ getLinkedInLink }><i className="icon-social-linkedin"></i></button></li>
                <li className="list-inline-item">&nbsp;<button className="text-white social-link rounded-circle" style={noBorder} onClick={ getTwitterShare }><i className="icon-social-twitter"></i></button></li>
            </ul>
        </div>
        <a className="js-scroll-trigger scroll-to-top rounded" href="#page-top"><i className="fa fa-angle-up"></i></a>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="assets/js/script.min.js"></script>
      </div>);
}

export default Footer;
