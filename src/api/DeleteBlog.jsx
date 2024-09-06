import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

import PostForm from '../components/PostForm';

const DeletePost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { dispatch } = usePosts();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`http://localhost:3000/posts/${id}`);
				const postData = await response.json();

				setPost(postData);
			} catch (error) {
				console.error('Erro ao buscar detalhes do post:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleDelete = async () => {
		try {
			await fetch(`http://localhost:3000/posts/${id}`, {
				method: 'DELETE',
			});

			dispatch({ type: 'DELETE_POST', payload: id });

			navigate('/blog');
		} catch (error) {
			console.error('Erro ao deletar post:', error);
		}
	};

	if (!post) return <div>Loading...</div>;

	return <PostForm action='delete' title={post.title} body={post.body} name={post.name} onNameChange={() => {}} onTitleChange={() => {}} onBodyChange={() => {}} onSubmit={handleDelete} />;
};

export default DeletePost;
