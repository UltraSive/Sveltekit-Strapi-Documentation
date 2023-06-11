import type { PageServerLoad } from './$types';
import axios from 'axios';

export const load = (async ({ params }) => {
	const fetchDocs = async () => {
		console.log('Docs Load Ran');
		const res = await axios.get('https://cms.anchored.host/api/docs');
		const data = await res.data;
		console.log(data);
		return data;
	};

    const fetchCatagories = async () => {
		console.log('Docs Load Ran');
		const res = await axios.get('https://cms.anchored.host/api/docs');
		const data = await res.data;
		console.log(data);
		return data;
	};

	return {
		docs: await fetchDocs(),
        catagories: await fetchCatagories()
	};
}) satisfies PageServerLoad;