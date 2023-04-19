import React from 'react'
import BlogSubHeadInfo from '../../components/Blog/BlogSubHeadInfo';
import BlogCard from '../../components/BlogCard/BlogCard';
import BlogTopics from '../../components/BLogTopics/BlogTopics';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import Newsletter from '../../components/Newsletter/Newsletter';


const BlogPage = () => {
  return (
	<div>
	  <Header/>
	  <BlogSubHeadInfo/>
	  <BlogTopics/>
	  <BlogCard/>
	  <Newsletter/>
	  <Footer/>
	</div>
  )
}

export default BlogPage
