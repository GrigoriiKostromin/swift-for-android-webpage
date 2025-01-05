import React from 'react';
import './Footer.css'; // Importing a CSS file for styling (optional)
import Image from "next/image";

export default function Footer  ()  {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: </p>
          <p>Phone: </p>
        </div>

        <div className="footer-section address">
          <h4>Address</h4>
          <p>SCADE</p>
          <p>123 Innovation Drive</p>
          <p>Tech City, TC 45678</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a  
                                   href="https://x.com/scade_platform"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                 >
                                   <Image
                                     className="dark:invert"
                                     src="/x-logo.webp"
                                     alt="Vercel logomark"
                                     width={32}
                                     height={20}
                                     style={{
                                      margin: "auto",
                                    }}
                                   />
                                   
                                 </a></li>
            <li>  
                                  <a  
                                   href="https://www.linkedin.com/company/scade-mobile/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                 >
                                   <Image
                                     className="dark:invert"
                                     src="/li-logo.png"
                                     alt="Vercel logomark"
                                     width={30}
                                     height={20}
                                     style={{
                                      margin: "auto",
                                    }}
                                   />
                                   
                                 </a>
                      </li>
            <li><a  
                                   href="https://github.com/scade-platform/swift-android"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                 >
                                   <Image
                                     className="dark:invert pt-2"
                                     src="/github.svg"
                                     alt="Vercel logomark"
                                     width={30}
                                     height={20}
                                     style={{
                                      margin: "auto",
                                    }}
                                   />
                                   
                                 </a></li>
            <li><a href="/contact"></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SCADE All rights reserved.</p>
      </div>
    </footer>
  );
};



