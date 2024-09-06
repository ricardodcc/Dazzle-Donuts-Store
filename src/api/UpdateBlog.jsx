import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';

const UpdatePost = () => {
	const { id } = useParams();

	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`http://localhost:3000/posts/${id}`);
				const post = await response.json();

				setTitle(post.title);
				setBody(post.body);
				setName(post.name);
			} catch (error) {
				console.error('Erro ao buscar post:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch(`http://localhost:3000/posts/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body, name }),
			});

			const updatedPost = await response.json();

			dispatch({ type: 'UPDATE_POST', payload: updatedPost });

			// Redirecionar para a página principal ou mostrar mensagem de sucesso
			navigate('/blog');
		} catch (error) {
			console.error('Erro ao atualizar post:', error);
		}
	};

	return <PostForm action='update' title={title} body={body} name={name} onTitleChange={setTitle} onBodyChange={setBody} onWriterChange={setName} onSubmit={handleSubmit} />;
};

export default UpdatePost;
