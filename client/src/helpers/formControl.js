export const formControl = input => {
    let errors = {};

    if (!input.name) errors.name = 'Name is required'
    else if (!/^[^@#$%^&]+$/.test(input.name)) errors.name = 'Name must not contain special characters (@#$%^&)'

    if (!input.description) errors.description = 'Description is required'

    if (!input.genres.length) errors.genres = 'Genres cannot be empty'

    if (input.released && !/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input.released)) errors.released = 'Release date must be in the format yyyy-mm-dd'
    
    if (input.rating < 0 || input.rating > 5) errors.rating = 'Rating must be a number between 0 and 5';

    if (input.image && !/^(ftp|http|https):\/\/[^ "]+$/.test(input.image)) errors.image = "Image URL must have a valid URL format (http/https/ftp)"
    else if (input.image && !/(\.|=)(jpg|png|gif)$/i.test(input.image)) errors.image = "Image URL must have a valid image format (jpg/png/gif)"

    if (!input.platforms.length) errors.platforms = 'Platforms cannot be empty'
    
    return errors;
 };