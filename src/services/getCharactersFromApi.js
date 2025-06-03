// Función que obtiene los personajes desde la API
const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character") // Realiza una petición GET a la API
        .then(res => {
            return res.json() // Convierte la respuesta en formato JSON
        })
        .then(data => {
            // Transforma los datos de la API en un formato personalizado
            const parseCharacters = data.results.map((character) => {
                return {
                    character: character.name,
                    urlImage: character.image,
                    species: character.species,
                    id: character.id,
                    status: character.status,
                    origin: character.origin.name,
                    episodes: character.episode.length
                }
            })
            return parseCharacters; // Devuelve la lista transformada
        })
}
export default getCharactersFromApi;  // Exporta la función para poder usarla en app.jsx