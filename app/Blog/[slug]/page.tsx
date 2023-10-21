"use client"

import { useUrl } from 'nextjs-current-url';
import { useEffect } from 'react';

 
const Posts = () => {
  const { pathname } = useUrl() ?? {}
  return <p>Post: {pathname}</p>
}
export default Posts;