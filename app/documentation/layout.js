
import { Geist, Geist_Mono } from "next/font/google";

import React from 'react'
import getDynamicBoxMetadata from '../../utils/getDynamicBoxMetadata';
import DynamicBox from '../../components/DynamicBox';
import NavbarDoc from '../../components/NavbarDoc';
import { ReactLenis } from "lenis/dist/lenis-react";
import Home from "./page"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
 
}) {
  return (
    <html lang="en">
      <ReactLenis 
      root
      options={{
        // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
        lerp: 0.05,
      }}>
        
        
      <body
      >

      <Home />
        
        
      
      </body>
      
      </ReactLenis>
      
    </html>
    
  );
}
