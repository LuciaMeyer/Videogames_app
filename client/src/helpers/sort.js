export const nameASC = (a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    return 0
}

export const nameDES = (a, b) => {
    if(a.name > b.name) return -1;
    if(a.name < b.name) return 1;
    return 0 
}

export const ratingWORST = (a, b) => {
    if(a.rating > b.rating) return 1;
    if(a.rating < b.rating) return -1;
    return 0
}

export const ratingBEST = (a, b) => {
    if(a.rating > b.rating) return -1;
    if(a.rating < b.rating) return 1;
    return 0 
}