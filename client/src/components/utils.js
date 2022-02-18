import axios from 'axios';

export async function itunesApiRequest(term) {
	const url = new URL('http://localhost:8080/music/' + term);
//	const url = new URL('https://itunes.apple.com/search?term='+term +'&media=music');


	try {
		const response = await fetch(url);
        const data = response.json();
		console.log(data);
		return data;

	} catch (error) {
		console.error(error);
	}
}
