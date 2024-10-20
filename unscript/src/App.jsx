import React from 'react';
import Navbar from './Navbar.jsx'; 
import './App.css'
import "./main.css"

// Color Design for front
const Svg = ()=>{
  return (
    <div id='color'>
      <div className="yellow"></div>
      <div className='green'></div>
    </div>
  )
}

// Center Div
const CenterDiv = ()=> {
  return (
    <div className="center-content">
      <h1>Create <span className='blueWord'>Professional Videos</span> at a fraction of the cost</h1>
      <p>Transform your text into engaging video content instantly, while saving time and cutting costs.</p>
    </div>
  );
};

// From Box Below Center Div
const FormBox = () => {
  return (
    <div className="form-box">
      <input type="email" placeholder="Email" className="email-input" />
      <button className="form-button">Get a Demo</button>
    </div>
  );
};

// Main Video
const FrontVideo = () => {
  return (
    <div id='video'>
      <iframe
        width="1350"
        height="750"
        src="https://www.youtube.com/embed/p5ID33gk3TE"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Trusted Customer Div
const TrustDiv = ()=>{
  return(
    <div id='trust'>
      <div>
        <h1>Trusted by 10,000+ customers worldwide</h1>
      </div>
      <div id='trustGrid'>
        <div><img src=".\images\first.png" alt="" /></div>
        <div><img src=".\images\second.png" alt="" /></div>
        <div><img src=".\images\third.png" alt="" /></div>
        <div><img src=".\images\fourth.png" alt="" /></div>
        <div><img src=".\images\fifth.png" alt="" /></div>
        <div><img src=".\images\sixth.png" alt="" /></div>
        <div><img src=".\images\seventh.png" alt="" /></div>
        <div><img src=".\images\eight.png" alt="" /></div>
        <div><img src=".\images\ninth.png" alt="" /></div>
        <div><img src=".\images\tenth.png" alt="" /></div>
        <div><img src=".\images\eleventh.png" alt="" /></div>
        <div><img src=".\images\twelth.png" alt="" /></div>
        <div><img src=".\images\thirteen.png" alt="" /></div>
        <div><img src=".\images\fourtheen.png" alt="" /></div>
        <div><img src=".\images\fifteen.png" alt="" /></div>
        <div><img src=".\images\sixteen.png" alt="" /></div>
        <div><img src=".\images\seventeen.png" alt="" /></div>
        <div><img src=".\images\eighteen.png" alt="" /></div>
      </div>
    </div>
  )
};


// Below Customer Div's 
const Minutes = ({ text, imageSrc, reverse, smallImg, contentHeading, description, linkText,firstWord }) => {
  return (
    <div className='lowerDivs'>
      {!reverse ? (
        <>
          <div className='contentDiv'>
            {smallImg && <img className='smallImg'  src={smallImg} alt="" />} 
            {contentHeading && <h1><span className='blueWord'> {firstWord}</span> {contentHeading}</h1>}
            <p>{text}</p>
            {description && <p><span className=''>{description}</span></p>} <br/>
            {linkText && <a href="#">{linkText} →</a>}
          </div>
          <div className='imgDiv'><img className='mainImg' src={imageSrc} alt="" /></div>
        </>
      ) : (
        <>
          <div className='imgDiv'><img className='mainImg' src={imageSrc} alt="" /></div>
          <div className='contentDiv'>
          {smallImg && <img className='smallImg' src={smallImg} alt="" />}
          {contentHeading && <h1><span className='blueWord'> {firstWord}</span> {contentHeading}</h1>}
            <p>{text}</p>
            {description && <p>{description}</p>}<br/>
            {linkText && <a href="#">{linkText} →</a>}
          </div>
        </>
      )}
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo"> 
        <img src=".\images\footerLogo.png" alt="Unscript logo" />
        <a href=""><img src=".\images\social.png" alt="" /></a>
      </div>
      <hr />

      <nav className="footer-nav">
        <div>
          <h3 className="footer-nav-title">Usecase</h3>
          <hr />
          <ul>
            <li><a href="#">Learning and Development</a></li>
            <li><a href="#">Marketing Teams</a></li>
            <li><a href="#">Personalized Videos</a></li>
            <li><a href="#">Dubbing</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Enterprise</a></li>
            <li>2nd Floor, 2725, 16th Cross Rit. PWD Quarters, 1st Sector, HSR Layout,<br /> Bengaluru, Karnataka 560102</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-nav-title">Feature</h3>
          <hr />
          <h1></h1>
          <ul>
            <li><a href="#">AI Avatars</a></li>
            <li><a href="#">Video Dubbing</a></li>
            <li><a href="#">AI Face Swap</a></li>
            <li><a href="#">Customized Virtual Influencer</a></li>
            <li><a href="#">Video Personalization</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-nav-title">Resource</h3>
          <hr />
          <ul>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="footer-nav-title">Company</h3>
          <hr />
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
      </nav>


    <br />
    <div id="copyRight">
      <p className="footer-copyright">Copyright © 2024 UnscriptAI</p>
    </div>
    </footer>
  
  );
};

// Book Banner
const Banner = ()=>{
  return(
    <div className='mainContainer'>
      <div className='bannerContainer'>

        <div>
          <button id='demo'>Book a demo</button>
        </div>

        <div id='subscribeContainer'> 

          <div>
            <p>Our video output beats the likes of Google Vlogger,<br /> and at par with Microsoft's VASA-1 & Alibaba's EMO </p>
          </div>

          <div className="email-subscribe">
              <input type="email" placeholder="Email" />
              <button id="subscribe">Subscribe</button>
          </div>
        </div>
        
      </div>
    </div>

  )
}

function App() {
  return (
    <>
      <Navbar />
      <Svg/>
      <CenterDiv />
      <FormBox />
      <FrontVideo />
      <TrustDiv />
      <Minutes 
        smallImg=".\images\littleCamera.png"
        firstWord= "Minutes,"
        contentHeading="not Hours"
        description="No need for lengthy processes like filming, editing, or storyboarding. create content in minutes by simply providing a script." 
        imageSrc=".\images\2.04_minutes.png" 
        reverse={false} 
        linkText="Discover More"
      />

      <Minutes 
      smallImg=".\images\costReduction.png"
        firstWord= "80%"
        contentHeading= "cost reduction"
        description="eliminate the need for expensive equipment, location rentals, and professional videographers, reducing overall production costs." 
        imageSrc=".\images\coin.png" 
        reverse={true} 
        linkText="Discover More"
      />

      <Minutes 
        smallImg=".\images\aiTool.png"
        contentHeading="15 vs 1 AI tool"
        firstWord="A Crew of "
        description="Video production coordination involves managing schedules and equipment. AI videos streamline this, reducing labor and management efforts." 
        imageSrc=".\images\ai.png" 
        reverse={false} 
        linkText="Discover More"
      />
      <Minutes 
        smallImg=".\images\lang.png"
        contentHeading="Languages"
        firstWord="140+"
        description="Engage non-English speaking audiences by automating dubbing and translation to create and distribute multilingual videos quickly.
" 
        imageSrc=".\images\language.png" 
        reverse={true} 
        linkText="Discover More"
      />
      <Banner/>
      <Footer/>
    </>
  );
}

export default App;