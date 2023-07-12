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

	/* 
    const fetchCatagories = async () => {
		console.log('Catagories Load Ran');
		const res = await axios.get(`${STRAPI_URL}/api/doc_catacories`);
		const data = await res.data;
		console.log(data);
		return data;
	};
	*/

	const fetchLinks = async () => {
		console.log('Links Load Ran');
		const res = await axios.get(`${STRAPI_URL}/api/doc-links`);
		const data = await res.data;
		console.log(data);
		return data;
	};
	

	return {
		docs: await fetchDocs(),
        links: await fetchLinks()
	};
}) satisfies PageServerLoad;