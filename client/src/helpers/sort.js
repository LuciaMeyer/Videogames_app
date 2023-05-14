export const nameASC = (a, b) => {
    const nA = a.name.toUpperCase()
    const nB = b.name.toUpperCase()
    if(nA > nB) return 1;
    if(nA < nB) return -1;
    return 0
}

export const nameDES = (a, b) => {
    const nA = a.name.toUpperCase()
    const nB = b.name.toUpperCase()
    if(nA > nB) return -1;
    if(nA < nB) return 1;
    return 0 
}

export const ratingWORST = (a, b) => {
    return a.rating - b.rating
}

export const ratingBEST = (a, b) => {
    return b.rating - a.rating
}

export const newest = (games) => {
    return games.sort((a, b) => new Date(b.released) - new Date(a.released))
        .map(game => {
        const [day, month, year] = game.released.split('-');
        game.released = `${day}-${month}-${year}`;
        return game;
        });  
}

export const oldest = (games) => {
    return games.sort((a, b) => new Date(a.released) - new Date(b.released))
        .map(game => {
        const [day, month, year] = game.released.split('-');
        game.released = `${day}-${month}-${year}`;
        return game;
        }); 
};