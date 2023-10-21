import matter from "gray-matter";
import { NextRequest, NextResponse } from "next/server";

async function getPostByName(filename: any) {
  const res = await fetch(`https://raw.githubusercontent.com/yousef-romany/mdx/main11/${filename}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    } 
  })
  
  if(!res.ok) return undefined
  const rawMDX = await res.text();
  if(rawMDX === "404: Not Found") return undefined
  
  const {content, data} = await matter(rawMDX);

  const id = filename.replace(/\.mdx$/, "")
  const blogPostObj: any = {
    content: content,
    data: {
      id, 
      img: data.img,
      time: data.time,
      title: data.title, 
      date: data.date, 
      tags: data.tags
    }
  }
  return blogPostObj;
}
async function getAllPosts() {
  
    const responsive = await fetch('https://api.github.com/repos/yousef-romany/mdx/git/trees/main11', {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
      } 
    })
    
    if(!responsive.ok) return undefined

    const repoFiletree: any = await responsive.json();
    const fileArray = repoFiletree.tree.map((obj:any) => obj.path).filter((path:any) => path.endsWith(".mdx"))
    const allPost:any = []
    for(const file of fileArray) {
      const post = await getPostByName(file)
      if(post){
        allPost.push(post)
      }
    }
    return allPost;

} 

export async function GET(request: Request) {
  return NextResponse.json(await getAllPosts());
}