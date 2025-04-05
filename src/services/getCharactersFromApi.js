const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(res => {
            return res.json()
        })
        .then(data => {
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
            return parseCharacters;
        })
}
export default getCharactersFromApi;