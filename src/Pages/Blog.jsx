import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:3000/posts');
				const data = await response.json();
				// Ordena os posts por ID de maneira crescente
				const sortedData = data.sort((a, b) => b.id + a.id);
				setBlogs(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

	return (
		<section className='section__full'>
			<div className='container container-special blog'>
				<div>
					<h2 className='blog__heading'>Let us a note</h2>
					<Link to={'/create'}>
						<button className='btn btn-reverse'>New Post</button>
					</Link>
				</div>
				<div className='blog__posts'>
					{error && <h4>{error.message}</h4>}
					{blogs.length ? (
						blogs.map(blog => (
							<article className='blog__posts-item' key={blog.id}>
								<h3 className='blog__posts-item__title'>{blog.title}</h3>
								<p className='blog__posts-item__address'>
									<span>Message: </span>
									{blog.body}
								</p>
								<p className='blog__posts-item__workHours'>
									<span>Writer:</span>
									{blog.name}
								</p>
								<div className='blog__buttons'>
									<Link to={`/update/${blog.id}`}>
										<button className='btn'> Update </button>
									</Link>
									<Link to={`/delete/${blog.id}`}>
										<button className='btn'> Delete </button>
									</Link>
								</div>
							</article>
						))
					) : (
						<h4 className='blog__heading-empty'>There are no posts yet</h4>
					)}
				</div>
			</div>
		</section>
	);
};

export default Blog;
