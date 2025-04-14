import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
	getHeroById,
	updateHero,
	deleteHero,
} from '../adapters/fellowAdapters';

const HeroDetails = () => {
	const [hero, setHero] = useState({});
	const [newHeroName, setNewHeroName] = useState('');
	const [newImg, setNewImg] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	// on load, get the fellow by id
	useEffect(() => {
		const doFetch = async () => {
			const [foundHero, error] = await getHeroById(id);
			setHero(foundHero);
		};
		doFetch();
	}, []);

	// when the delete button is pressed, send a DELETE request
	const handleDeleteHero = async () => {
		await deleteHero(id);
		navigate('/');
	};

	// when the form is filled out, send a PATCH request
	const handleUpdateHero = async (e) => {
		e.preventDefault();

		const [updatedHero, error] = await updateHero(id, newHeroName, newImg);
		setHero(updatedHero);

		setNewHeroName('');
		setNewImg('');
	};

	return (
		<>
			<Link to="/">Go Home</Link>
			<h1>Hero Details</h1>
			<p>Name: {hero.name}</p>
			<p>Id: {hero.id}</p>
			<p>
				Picture: <img src={hero.img} alt={hero.name} />
			</p>
			<form onSubmit={handleUpdateHero}>
				<label htmlFor="name">Update Hero Name</label>
				<input
					type="text"
					name="name"
					id="name"
					value={newHeroName}
					onChange={(e) => setNewHeroName(e.target.value)}
					placeholder="New Name"
				/>
				<label htmlFor="img">Update Hero Image</label>
				<input
					type="text"
					name="image"
					id="img"
					value={newImg}
					onChange={(e) => setNewImg(e.target.value)}
					placeholder="New Image Link"
				/>
				<button type="submit">Submit</button>
			</form>
			<button onClick={handleDeleteHero} className="danger">
				Delete Hero
			</button>
		</>
	);
};

export default HeroDetails;
