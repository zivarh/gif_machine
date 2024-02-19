function gifSearch(){
    document.getElementById("heading").innerText = "Here you are darling ;)"
    let query = document.getElementById("input").value
    fetchGIFs(query)
    console.log("hello")
    document.getElementById("input").value = '';
}

function fetchGIFs(query) {
    const apiKey = 'BR9xzN8y3rctwj9W9gnGbeMzTL7EQ4IM';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayGIFs(data.data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayGIFs(gifs) {
    const container = document.getElementById('gifContainer');
    container.innerHTML = ''; // Clear previous results
    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        container.appendChild(img);
    });
}