import React from 'react';
import butterfly from '../assets/butterfly.png';
import apple from '../assets/apple.png';
import playstore from '../assets/playstore.png';
import "../assets/Contact.css"
function Contact() {
  return (
    <div>
      <footer>

        <div className="container" style={{paddingTop:25,paddingBottom:25}}>
        <div className="row">
          <div className="col-6 col-md">
          <p>Download app From</p>
          <div className="icons" >
          <img src={playstore} alt="playstore" className="img-fluid" style={{borderRadius:0, boxShadow:"none", marginRight:20}}/>
          <img src={apple} alt="apple" className="img-fluid" style={{borderRadius:0, boxShadow:"none"}}/>
          </div>
          </div>
          
          <div className="col-6 col-md">
          <img className='img-fluid' src={butterfly} alt="" />
          </div>
          
        </div>
        </div>
        <div className='green'>
        <p style={{marginBottom:0}} className="float-end"><a href="#">Back to top</a></p>
        <p style={{marginBottom:0}}>© 2023 Neighbourgoods · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
