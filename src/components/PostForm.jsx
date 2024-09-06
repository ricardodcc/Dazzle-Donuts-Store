import { useNavigate } from 'react-router-dom';

const PostForm = ({ action, title, body, name, onTitleChange, onBodyChange, onWriterChange, onSubmit }) => {
	const navigate = useNavigate();

	return (
		<section className='section__full container'>
			<div className='blogForm__wrapper'>
				<form onSubmit={onSubmit} className='blogForm__form'>
					<h3> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : 'Create Post'}</h3>

					<div className='blogForm__input'>
						<label>Title:</label>
						<input type='text' value={title} onChange={e => onTitleChange(e.target.value)} required />
					</div>

					<div className='blogForm__input'>
						<label>Body:</label>
						<textarea value={body} onChange={e => onBodyChange(e.target.value)} required />
					</div>

					<div className='blogForm__input'>
						<label>Writer:</label>
						<input value={name} onChange={e => onWriterChange(e.target.value)} required />
					</div>

					<div className='blogForm__input '>
						{action === 'delete' ? (
							<>
								<button className='blogForm__btns btn' type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className='blogForm__btns btn' type='button' onClick={() => navigate('/blog')}>
									Cancel
								</button>
							</>
						) : (
							<>
								<button className='blogForm__btns btn' type='submit'>
									{action === 'update' ? 'Update' : 'Submit'}
								</button>
								<button className='blogForm__btns btn' type='button' onClick={() => navigate('/blog')}>
									Cancel
								</button>
							</>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default PostForm;
