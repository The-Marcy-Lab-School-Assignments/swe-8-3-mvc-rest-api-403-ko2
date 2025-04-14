const Heros = require('../model/Heros');

/* 
These controllers take incoming requests and utilize the
methods provided by the Fellow "model" before sending a
response back to the client (or an error message).
*/

// Get All (Read)
const serveHeros = (req, res) => {
	const heroList = Heros.list();
	res.send(heroList);
};

// Get One (Read)
const serveHero = (req, res) => {
	const { id } = req.params;
	const hero = Heros.find(Number(id));

	if (!hero) {
		return res.status(404).send({
			message: `No fellow with the id ${id}`,
		});
	}
	res.send(hero);
};

// Create
const createHero = (req, res) => {
	const { heroName, img } = req.body;
	if (!heroName || !img) {
		return res.status(400).send({ message: 'Invalid Name of Image' });
	}

	const newHero = Heros.create(heroName, img);
	res.send(newHero);
};

// Update
const updateHero = (req, res) => {
	const { heroName, img } = req.body;

	if (!heroName) {
		return res.status(400).send({ message: 'Invalid Name' });
	}

	const { id } = req.params;
	const updatedHero = Heros.editName(Number(id), heroName, img);

	if (!updatedHero) {
		return res.status(404).send({
			message: `No fellow with the id ${id}`,
		});
	}

	res.send(updatedHero);
};

// Delete
const deleteHero = (req, res) => {
	const { id } = req.params;
	const didDelete = Heros.delete(Number(id));

	if (!didDelete) {
		return res.status(404).send({
			message: `No fellow with the id ${id}`,
		});
	}

	res.sendStatus(204);
};

module.exports = {
	serveHeros,
	serveHero,
	createHero,
	updateHero,
	deleteHero,
};
