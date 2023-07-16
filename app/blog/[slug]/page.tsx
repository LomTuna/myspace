import { Content } from "next/font/google";

export const revalidate = 420; 
//update cache every 'n' seconds ; can be done at the fetch level as well

interface Post {
    title: string; 
    content: string;  
    slug: string; 
}

interface Props {
  params: { slug: string }
}


//incremental static generation
export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  ); 

  return posts.map((post) => ({
    slug: post.slug, 
  })); 
}

export default async function BlogPostPage ({params}: Props) {

  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  ); 
  const post = posts.find((post) => post.slug === params.slug)!; 
  //the use of '!' (non null assertion op) tells compiler that we will not have a null value, preventing errors 

  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  ); 

}