'use client'; 

//having multiple components takes advantage of using 'use client' directive once 

import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image'
import Link from 'next/link'; 

export function SignInButton() { 
  //we want to show a users avatar if they're signed in, and just a button if they're signed out
  const { data: session, status } = useSession(); 
  console.log(session, status); 

  if (status === 'loading') { 
    return <>...</>; 
  }

  if (status === 'authenticated') {
    return (
      <Link href={'/dashboard'}>
        <Image 
          src={session.user?.image ?? '/mememan.webp'}
          width={32}
          height={32}
          alt="Your Name"
        >

        </Image>
      </Link>
    )
  }

  return <button onClick={() => signIn()}>Sign In</button>
}

export function SignOutButton() { 
  return <button onClick={() => signOut()}>Sign Out</button>
}