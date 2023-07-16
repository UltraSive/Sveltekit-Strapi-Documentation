import type { PageServerLoad } from './$types';
import { STRAPI_URL } from '$env/static/private'
import axios from 'axios';

export const load = (async ({ params }) => {
	const fetchDocs = async () => {
		console.log('Docs Load Ran');
		const res = await axios.get(`${STRAPI_URL}/api/docs`);
		const data = await res.data;
		console.log(data);
		return data;
	};
	
	return {
		docs: await fetchDocs(),
	};
}) satisfies PageServerLoad;