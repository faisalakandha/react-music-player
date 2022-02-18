
export async function itunesApiRequest(term) {
	const url = new URL('http://localhost:8080/music/' + term);

	try {
		const response = await fetch(url);
        const data = response.json();
		console.log(data);
		return data;

	} catch (error) {
		console.error(error);
	}
}
