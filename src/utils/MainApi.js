class Api {
    constructor(url) {
        this._url = url;
        this._token = localStorage.getItem('jwt');

        this._getJsonOrError = this._getJsonOrError.bind(this);
        this._getHeaders = this._getHeaders.bind(this);
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _getHeaders() {
        return {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
        }
    }

    //Get information about user from server

    getUserData() {
        return fetch(`${this._url}/users/me`, {
            headers: this._getHeaders(),
        })
            .then(this._getJsonOrError)
    }

    //Update information about user from server

    updateUserData(name, email) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify({
                name,
                email
            })
        })
            .then(this._getJsonOrError)
    }

    //Get information about save filmas

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            headers: this._getHeaders(),
        })
            .then(this._getJsonOrError)
    }

    //Add movies to save

    addMoviesToSave(data) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(data),
        })
            .then(this._getJsonOrError)
    }

    //Delete movies from save

    deleteMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._getHeaders(),
        })
            .then(this._getJsonOrError)
    }

    //Like
    
    /*changeLikeCardStatus(id, isLiked) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: isLiked ? 'PUT' : 'DELETE',
            headers: this._getHeaders(), 
        })
            .then(this._getJsonOrError)
    }*/
}

const api = new Api('https://api.movies.ks.nomoredomains.club')
export default api