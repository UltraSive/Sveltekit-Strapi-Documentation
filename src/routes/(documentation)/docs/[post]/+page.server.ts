import type { PageServerLoad } from './$types';
import axios from 'axios';

export const load = (async ({ params }) => {
	const fetchPost = async () => {
		console.log('Posts Load Ran');
		const res = await axios.get(
			`https://cms.anchored.host/api/docs?filters[slug][$eq]=${params.post}&populate=*`
		);

		return res.data.data[0];
	};

	let post = await fetchPost();

	return {
		post: post,
	};
}) satisfies PageServerLoad;