import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
	return (
		<div>
			<h1 style={{textAlign:"center", marginTop:'30px'}}>{title}</h1>
<<<<<<< HEAD
			{posts.map((post, index) =>
				<PostItem number={index + 1} post={post} key={post.id} />
=======
			{posts.map(post =>
				<PostItem post={post} key={post.id} />
>>>>>>> master
			)}
		</div>
	);
};

export default PostList;
