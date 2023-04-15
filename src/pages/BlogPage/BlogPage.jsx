import React from 'react'
import BlogSubHeadInfo from '../../components/Blog/BlogSubHeadInfo';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogTopics from '../../components/BLogTopics/BlogTopics';
import Header from "../../components/Header/Header";


const BlogPage = () => {
  return (
	<div>
	  <Header/>
	  <BlogSubHeadInfo/>
	  <BlogTopics/>
	  <BlogCard/>
	</div>
  )
}

export default BlogPage
