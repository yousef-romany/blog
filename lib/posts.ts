import axios from "axios";
import { compileMDX } from "next-mdx-remote/rsc";
export async function getPostByName(filename: any) {
  const res = await fetch(`https://raw.githubusercontent.com/yousef-romany/mdx/main11/${filename}`, {
    // credentials: 'omit',
    method: 'GET',  
  headers: {
      accept: 'application/vnd.github+json',
      // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      // 'X-GitHub-Api-Version': '2022-11-28',
    } 
  })
  
  if(!res.ok) return undefined
  const rawMDX = await res.text();
  if(rawMDX === "404: Not Found") return undefined
  
  
  let { frontmatter, content } = await compileMDX<{ title: string, date: string, tags: string[]}>({ source: rawMDX, options: {parseFrontmatter: true} })
  

  const id = filename.replace(/\.mdx$/, "")
  const blogPostObj: any = {meta: {id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags}, content}
  return blogPostObj;
}

export async function getAllPosts() {
  
    const res = await fetch('https://api.github.com/repos/yousef-romany/mdx/git/trees/main11', {
      // credentials: 'omit',
      method: 'GET',  
    headers: {
        accept: 'application/vnd.github+json',
        // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        // 'X-GitHub-Api-Version': '2022-11-28',
      } 
    })

    // await axios.get('https://api.github.com/repos/yousef-romany/mdx/git/trees/main11', {
    //   headers: {
    //     Accept: 'application/vnd.github+json',
    //     Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     'X-GitHub-Api-Version': '2022-11-28',
    //   } 
    // }).then(res=> console.log(res["tree"].map((obj:any) => obj.path).filter((path:any) => path.endsWith(".mdx"))))
    
    if(!res.ok) return undefined

    const repoFiletree: any = await res.json();
    const fileArray = repoFiletree.tree.map((obj:any) => obj.path).filter((path:any) => path.endsWith(".mdx"))
    const allPost:any = []
    for(const file of fileArray) {
      const post = await getPostByName(file)
      if(post){
        const {meta} = post;
        allPost.push(meta)
      }
    }
    // console.log(allPost.sort((a: any, b: any)=> a.date < b.date ? 1 : -1))
    return allPost.sort((a: any, b: any)=> a.date < b.date ? 1 : -1)

} 