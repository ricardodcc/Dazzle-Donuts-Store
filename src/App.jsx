// imports relative to react components
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Contacts from './Pages/Contacts.jsx';
import Story from './Pages/Story.jsx';
import Locations from './Pages/Locations.jsx';
import Menu from './Pages/Menu.jsx';
import MenuItem from './Pages/MenuItem.jsx';
import Blog from './Pages/Blog.jsx';

// crud imports
// import CreatePost from './api/CreatePost';
import CreateBlog from './api/CreateBlog';
import UpdateBlog from './api/UpdateBlog';
import DeleteBlog from './api/DeleteBlog';

//imports relative to styles
import './sass/main.scss';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/story' element={<Story />} />
						<Route path='/locations' element={<Locations />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/menu' element={<Menu />} />
						<Route path='/blog' element={<Blog />} />
						{/* dynamic route to interact with each menu item */}
						<Route path='/menu/:id' element={<MenuItem />} />
						{/* routes for API */}
						<Route path='/create' element={<CreateBlog />} />
						{/* dynamic route to interact with API */}
						<Route path='/update/:id' element={<UpdateBlog />} />
						<Route path='/delete/:id' element={<DeleteBlog />} />
						{/* in case of going to an unknown route  */}
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
