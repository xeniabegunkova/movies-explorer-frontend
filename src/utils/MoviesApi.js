const moviesApi = 'https://api.nomoreparties.co/beatfilm-movies';

//answer from server

const getResponse = (response) => {
    try {
        if (!response.ok) {
            return Promise.reject(new Error(response.statusText));
        }
        return response.json();
    } catch (error) {
        return error
    }
}

//get movie list from server of films
export const getMovieList = async () => {
    console.log(getMovieList);
    const response = await fetch(moviesApi, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return await getResponse(response);
}

//https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
//https://developer.mozilla.org/ru/docs/Web/API/Response
//https://monsterlessons.com/project/lessons/poluchenie-dannyh-ot-servera-s-pomoshyu-fetch