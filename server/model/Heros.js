const getId = require('../utils/getId');

// Restrict access to our mock "database" to just the Model
const heros = [
	{
		name: 'Daredevil',
		id: getId(),
		img: 'https://imgs.search.brave.com/0OIgQhhFE3V2k6lwZ4mldoE7F4BDSi_Qo6RkIBFOCKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdp/eC5yYW5rZXIuY29t/L3VzZXJfbm9kZV9p/bWcvNTAwNDIvMTAw/MDgzMjQyNS9vcmln/aW5hbC9jbGFzc2lj/LXJlZC1waG90by11/MT9hdXRvPWZvcm1h/dCZxPTYwJmZpdD1j/cm9wJmZtPXBqcGcm/ZHByPTImdz01MDA',
	},
	{
		name: 'Spider-Man',
		id: getId(),
		img: 'https://imgs.search.brave.com/Hf1l4qUFSEq8wKQf2C2tO9rNvizLY1kDS3nKnPwmJos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA0L3NwaWRl/ci1tYW4tYmxhY2st/Y29zdHVtZS1zZWNy/ZXQtd2Fycy1kaXNw/bGF5LmpwZw',
	},
	{
		name: 'Moon-Knight',
		id: getId(),
		img: 'https://imgs.search.brave.com/5fWwikdPWtAplGQM4XSqYKaX6y3wSyL5NiqY8UFTtck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21p/Y3ZpbmUuZ2FtZXNw/b3QuY29tL2EvdXBs/b2Fkcy9zY2FsZV9t/ZWRpdW0vMTIvMTI0/MjU5Lzc5MTMyMDkt/cmNvMDIyXzE0Nzgx/MDU3MTguanBn',
	},
	{
		name: 'Gambit',
		id: getId(),
		img: 'https://imgs.search.brave.com/3xlXnXII8NRyac6Z_vtr8qnmRH9eFRGtV4StdYimrXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzAwL2Nm/L2Y3LzAwY2ZmN2Vj/NjMyODUwNmZlZGFm/M2I0NmJlZWFkYjFh/LmpwZw',
	},
];

class Heros {
	// Create and add the new fellow to the "database" (the fellows array)
	// Rather than using a constructor, we use a static method to create a new fellow
	static create(name, img) {
		const newHero = {
			name,
			id: getId(),
			img: img || 'no image',
		};
		heros.push(newHero);
		return newHero;
	}

	// Get all values from the "database"
	static list() {
		return [...heros];
	}

	// Get one value from the "database"
	static find(id) {
		return heros.find((hero) => hero.id === id);
	}

	// Update one value from the "database"
	static editName(id, newName, newImg) {
		const hero = Heros.find(id);
		if (!hero) return null;
		if (newName) hero.name = newName;
		if (newImg) hero.img = newImg;
		return hero;
	}

	// Delete one value from the "database"
	static delete(id) {
		const heroIndex = heros.findIndex((hero) => hero.id === id);
		if (heroIndex < 0) return false;

		heros.splice(heroIndex, 1);
		return true;
	}
}

module.exports = Heros;

/* 
Take a moment and play with these class methods. Try the following and
run this file with `node Fellow.js`:

console.log(Fellow.list())
console.log(Fellow.find(1))
console.log(Fellow.editName(1, 'ZO!!'))
console.log(Fellow.delete(2))
console.log(Fellow.list())
*/
