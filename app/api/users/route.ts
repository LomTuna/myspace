import { prisma } from '@/lib/prisma'; 
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { get } from 'http';
import { authOptions } from '../auth/[...nextauth]/route';
import { json } from 'stream/consumers';


export async function PUT(req: Request) {

  const session = await getServerSession(authOptions); 
  const currentUserEmail = session?.user?.email!; 

  const data = await req.json(); 
  //converts json string to a number 'for age' 
  data.age = Number(data.age); 

  const user = await prisma.user.update({
    where: {
      email: currentUserEmail, 
    }, 
    data, 
  }); 

  return NextResponse.json(user); 
}