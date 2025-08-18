import React from 'react'
import BlogHeader from '../components/Blogs/BlogHeader'
import BlogGrid from '../components/Blogs/blogPosts'
import Pagination from '../components/Blogs/Pagination'
export default function Blogs() {
  return (
    <div>
      <BlogHeader />
      <BlogGrid />
      <Pagination />
    </div>
  )
}
