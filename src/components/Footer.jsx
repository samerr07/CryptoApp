import React from 'react'
import "./footer.scss"
import {AiOutlineWhatsApp,AiOutlineInstagram,AiOutlineFacebook,} from "react-icons/ai";
import crypto1 from "../assests/Crypto.png";

const Footer = () => {
  return (
//     <div className="footer">
//       {/* <footer> */}

//   <img src={crypto1} width={"80px"} height={"80px"} alt="" />
// <div className="con">
// <ul class="socialIcon">
// <li className='icon'><a href="#" ><AiOutlineWhatsApp  size={"30px"}/></a></li>
//       <li className='icon'><a href="#" ><AiOutlineInstagram size={"30px"}/></a></li>
//       <li className='icon'><a href="#"><AiOutlineFacebook size={"30px"}/></a></li>
//       {/* <li className='icon'><a href="#"><BsTelegram size={"30px"}/></a></li> */}

// </ul>

// <ul class="menu">
//     <li><a href="#">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Services</a></li>
//     <li><a href="#">Team</a></li>
//     <li><a href="#">Contact</a></li>
// </ul>

// <p>&copy2023 Somu Developer | All Rights Reserved</p>
// </div>


// {/* </footer> */}
//     </div>

<footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-md-3 firstImg">
            <img src={crypto1} alt="" width={"140px"} height={"140px"} />
          </div>
         
          {/* <div className="row1"> */}
          <div className="col-md-3 secRow ">
            <h2>About</h2>
            <ul className="list-unstyled">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
           

            </ul>
          </div>
          <div className="col-md-3 secRow ">
            <h2>Policy</h2>
            <ul className="list-unstyled">
              
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Sitemap</a></li>

            </ul>
          </div>
          <div className="col-md-3 thirdRow">
            <h2>Contact</h2>
            <ul className="list-unstyled">
              <li><a href="#">Email Us</a></li>
              <li><a href="#">Call Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 forRow1">
            <h2>Follow Us</h2>
            <ul className="list-unstyled">
              <li className='icon'><a href="#" ><AiOutlineWhatsApp  size={"30px"}/></a></li>
              <li className='icon'><a href="#" ><AiOutlineInstagram size={"30px"}/></a></li>
              <li className='icon'><a href="#"><AiOutlineFacebook size={"30px"}/></a></li>
              {/* <li className='icon'><a href="#"><BsTelegram size={"30px"}/></a></li> */}

            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="footer-bottom">
      
        <p>We are a team of passionate crypto enthusiasts who are dedicated to providing the latest news, analysis, and insights on the cryptocurrency market.</p>
        <br />
        <p>We are a leading cryptocurrency platform providing secure and reliable crypto trading services.</p>
        <br />
        <p>© 2023 Crypto. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
