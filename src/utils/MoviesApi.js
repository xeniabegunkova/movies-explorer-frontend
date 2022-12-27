const moviesApiUrl = 'https://api.nomoreparties.co/beatfilm-movies';

//answer from server

export async function getMovieList() {
    try {
        let res = await fetch(moviesApiUrl, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const response = await res.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

//https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
//https://developer.mozilla.org/ru/docs/Web/API/Response
//https://monsterlessons.com/project/lessons/poluchenie-dannyh-ot-servera-s-pomoshyu-fetch