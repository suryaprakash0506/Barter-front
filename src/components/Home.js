import React from 'react'
import "../css/Home.css"
import Post from './Post'
import Search from './Search';
import Spinner from './Spinner';
import Filters from './Filters';
import { useEffect, useState } from 'react';
// import {getUserPosts} from "../services/Apis"

const Home = () => {
	const [loading, setLoading] = useState(true)
	const [posts, setPosts] = useState([]);

	useEffect(() => {

		fetch('https://barter-backend.onrender.com/posts', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => response.json())
			.then(data => setPosts(data))
			.catch(error => console.error(error));
			setLoading(false)
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
