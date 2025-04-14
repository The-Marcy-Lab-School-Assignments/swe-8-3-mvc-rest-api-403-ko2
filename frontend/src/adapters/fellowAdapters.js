import handleFetch from './handleFetch';

export const getAllHeros = async () => {
	const [allFellows, error] = await handleFetch('/api/fellows/');
	return [allFellows, error];
};

export const getHeroById = async (id) => {
	const [fellow, error] = await handleFetch(`/api/fellows/${id}`);
	return [fellow, error];
};

export const createHero = async (heroName, img) => {
	const options = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({ heroName, img }),
	};

	const [newHero, error] = await handleFetch(`/api/fellows/`, options);
	return [newHero, error];
};

export const deleteHero = async (id) => {
	const options = {
		method: 'DELETE',
	};
	const [success, error] = await handleFetch(`/api/fellows/${id}`, options);
	return [success, error];
};

export const updateHeroName = async (id, heroName) => {
	const options = {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({ heroName }),
	};

	const [updatedFellow, error] = await handleFetch(
		`/api/fellows/${id}`,
		options
	);
	return [updatedFellow, error];
};

export const updateHero = async (id, heroName, img) => {
	const options = {
		method: 'PATCH',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({ heroName, img }),
	};

	const [updatedFellow, error] = await handleFetch(
		`/api/fellows/${id}`,
		options
	);
	return [updatedFellow, error];
};
