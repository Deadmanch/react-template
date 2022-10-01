import React, { useState} from 'react';
import './css/App.css';
import PostList from "./components/PostList";
import MyBtn from "./components/UI/Button/MyBtn";
import MyInput from "./components/UI/Input/MyInput";


function App() {
	const [posts, setPosts] = useState([
		{id:1, title: 'Javascript', body: 'Description'},
		{id:2, title: 'Javascript 2', body: 'Description'},
		{id:3, title: 'Javascript 3', body: 'Description'}
	])
	
	// const bodyInputRef = useRef();
	const [post, setPost] = useState({title: '', body: ''})
	const addNewPost = (e) => {
		e.preventDefault();
		setPosts([...posts, {...post, id: Date.now()}]);
		setPost({title: '', body: ''})
	}
	
	
	return (
		<div className='App'>
			<form action="#">
				{/*Управляемый компонент*/}
				<MyInput
					value = {post.title}
					onChange = {e => setPost({...post, title: e.target.value})}
					type="text"
					placeholder='Название поста'/>
				<MyInput
					value = {post.body}
					onChange = {e => setPost({...post, body: e.target.value})}
					type="text"
					placeholder='Описание поста'/>
				
				{/*Неуправляемый или неконтролируемый компонент*/}
				{/*<MyInput*/}
				{/*	ref={bodyInputRef}*/}
				{/*	type="text"*/}
				{/*	placeholder='Описание поста'/>*/}
				<MyBtn onClick={addNewPost}>Создать пост</MyBtn>
			</form>
			<PostList posts={posts} title={'Список постов JS'}/>

		</div>
	)
	
}

export default App;
