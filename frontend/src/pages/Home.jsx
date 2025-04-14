import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllHeros, createHero } from '../adapters/fellowAdapters';

const Home = () => {
	// Get all fellows from the serverstate
	const [heros, setHeros] = useState([]);
	// form input state
	const [newHeroName, setNewHeroName] = useState('');
	// form submission response state
	const [newlyAddedHero, setNewlyAddedHero] = useState({});

	const [newHeroImg, setNewHeroImg] = useState('');

	// Get me the most up to date full list of fellows
	useEffect(() => {
		const doFetch = async () => {
			const [allHeros, error] = await getAllHeros();
			setHeros(allHeros);
		};
		doFetch();
	}, [newlyAddedHero]);

	// Use the form data to create a POST request to create a new fellow
	const handleCreateHero = async (e) => {
		e.preventDefault();
		console.log('image url:', newHeroImg);
		const [newHero, error] = await createHero(newHeroName, newHeroImg);

		setNewlyAddedHero(newHero);
		setNewHeroName('');
		setNewHeroImg('');
	};

	return (
		<>
			<h1>Home</h1>
			<form onSubmit={handleCreateHero}>
				<label htmlFor="name">Add A New Hero</label>
				<input
					type="text"
					name="name"
					id="name"
					value={newHeroName}
					onChange={(e) => setNewHeroName(e.target.value)}
				/>
				<label htmlFor="img">Add A New Hero Image</label>
				<input
					type="text"
					name="image"
					id="img"
					value={newHeroImg}
					onChange={(e) => setNewHeroImg(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			<ul>
				{heros.map((hero) => {
					return (
						<li key={hero.id}>
							<Link to={`/fellows/${hero.id}`}>
								{hero.name} (User {hero.id})
								<img src={hero.img} alt={hero.name} />
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Home;
