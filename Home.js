import React from 'react'
import "../css/Home.css"
import Post from './Post'
import Search from './Search';
import Spinner from './Spinner';
import Filters from './Filters';
import { useEffect, useState } from 'react';
// import {getUserPosts} from "../services/Apis"

const Home = () => {
	const [loading, setLoading] = useState();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		setLoading(true); // set loading to true before the fetch request is initiated
	  
		fetch('https://barter-backend.onrender.com/post', {
		// fetch('http://localhost:5000/posts', {
		  method: 'GET',
		  headers: { 'Content-Type': 'application/json' }
		})
		  .then(response => response.json())
		  .then(data => {
			setPosts(data);
			console.log(data);
			setLoading(false); // set loading to false after the data is fetched
		  })
		  .catch(error => console.error(error));
	  }, []);

	return (
		<>
			<Search />

			<Filters/>
			<div style ={{textAlign: 'center', marginTop: '10px'}} >
				{loading && <Spinner />}
			</div>
			<div className="home-posts-container">

				{posts.map(post => (
					<Post postImage={post.image} postName={post.title} hearts={post.hearts} views={post.views} shares={post.shares} />
					))}

			</div>
		</>
	);
};

export default Home
