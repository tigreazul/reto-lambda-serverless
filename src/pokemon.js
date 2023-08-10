const PokemonService = require('./services/pokemonService');

// Ejemplo de uso
PokemonService.createPokemon('Pikachu', 'Eléctrico');
const allPokemons = PokemonService.getAllPokemons();