import React, {useState} from 'react';
import Counter from "./components/Counter";
import './css/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";


function App() {
	const [posts, setPost] = useState([
		{id:1, title: 'Javascript', body: 'Description'},
		{id:2, title: 'Javascript 2', body: 'Description'},
		{id:3, title: 'Javascript 3', body: 'Description'}
	])
	
	
	return (
		<div className='App'>
			<PostList posts={posts} title={'Список постов JS'}/>

		</div>
	)
	
}

export default App;
