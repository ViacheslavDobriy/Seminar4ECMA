// hWWCxpB5qrm1UxI0eR7sYsj2RWVFazoY7wOchAkI - API key to NASA

const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

try {
    const data = await getData('https://api.nasa.gov/planetary/apod?api_key=hWWCxpB5qrm1UxI0eR7sYsj2RWVFazoY7wOchAkI&count=10');
    console.log(data);
} catch (error) {
    console.log(error.message);
}