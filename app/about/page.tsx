export const dynamic = 'force-static'; 
//explicitly caches this page//

import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'About Us', 
    description: 'We are a social media company', 

}; 

export default async function About() {

    return(
      <main>
            <h1>About</h1>
            <p>We are a social media commpany!</p>
      </main>
    )
  
}