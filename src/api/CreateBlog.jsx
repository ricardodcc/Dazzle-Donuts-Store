// eslint-disable-next-line react/prop-types

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body, name }),
			});

			const data = await response.json();

			dispatch({ type: 'CREATE_POST', payload: data });

			// Redirecionar para a página principal ou mostrar mensagem de sucesso
			navigate('/blog');
		} catch (error) {
			console.error('Erro ao criar post:', error);
		}
	};

	return (
		<>
			<PostForm action='create' title={title} body={body} name={name} onWriterChange={setName} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
		</>
	);
};

export default CreatePost;
