//width of screen

export const SCREENWIDTH_1280 = 1280;
export const SCREENWIDTH_768 = 600;

//num of cells

export const NUMBEROFCELLS_1280 = 12;
export const NUMBEROFCELLS_768 = 8;
export const NUMBEROFCELLS_600 = 5;

//num of cells in a row

export const NUMBEROFCELLSINAROW_1280 = 3;
export const NUMBEROFCELLSINAROW_768 = 2;

//num of min of 

export const TIMEOFTHESHORTFILMS = 40;

//conastant for search
export const SEARCHFILMS = () => {
    const searchFilms = JSON.parse(localStorage.getItem('searchedMovies'));

    const filteredMovies = searchFilms.filter(movie => {
        return movie.duration <= TIMEOFTHESHORTFILMS;
    });
}



export const SEARCHSAVEDFILMS = () => {

    const searchSavedFilms = JSON.parse(localStorage.getItem('savedMovies'));

    const filteredFilms = searchSavedFilms.filter(movie => {
        return movie.duration <= TIMEOFTHESHORTFILMS;
    });
}