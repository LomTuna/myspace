import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';


export default async function Home() {
  const session = await getServerSession(); 

  //redirect user to signin - if they try to access signed-in-only UI components
  // if (!session) {
  //   redirect ('/api/auth/signin'); 
  // }

  return (
    <main className={styles.main}>
     
    </main>
  )
}
