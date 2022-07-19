const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');


const router = Router();

const key = 'b5d0d6eb583547aebcc9043d888d8ca2'
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiUrl = async () => {
    const apiUrl = await axios.get('https:api.rawg.io/api/games?key=b5d0d6eb583547aebcc9043d888d8ca2');
    const apiInfo = await apiUrl.data.results.map(ob => {
        return {
            id: ob.id, // desde el fornt voy a acceder como el nombre de la propiedad
            name: ob.name,
            img: ob.background_image,
            rating: ob.rating,
            genres: ob.genres.map(ob => ob),
        }
    });
    return apiInfo;
};


module.exports = router;
