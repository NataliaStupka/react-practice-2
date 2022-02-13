import { Component } from 'react';
import PokemonErrorView from '../PokemonErrorView';
import PokemonDataView from '../PokemonDataView';
import PokemonPendingView from '../PokemonPendingView';
import pokemonAPI from '../../../servises-api/pokemon-api';


const Status = {
  IDLE: 'idle',              //спокойное
  PENDING: 'pending',      //загрузка
  RESOLVED: 'resolved',      //результат
  REJECTED: 'rejected',       //ошибка 
};

export default class PokemonInfo extends Component {
    state = {
        pokemon: 'null',
        // loading: false,       //после введения состояние loading не нужен, 'pending' его заменяет
        error: null,
        status: Status.IDLE,      //по умолчанию 
}

    //если предыдущий пропс покемонName и следующий не равны = делаем фетч
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            // console.log('Изменилось имя покемона');
           
            //перед загрузкой говорю loading: true, а после загрузки false
            //также перед загрузкой очищаю покемон
            // this.setState({ loading: true, pokemon: null });
            this.setState({ status: Status.PENDING });


            pokemonAPI
                .fetchPokemon(nextName)    //вызываем функцию
                .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
                .catch(error => this.setState({error, status: Status.REJECTED}))          //словит ошибку
                // .finally(() => this.setState({ loading: false }))     //не нужен, теперь все сделает status: 'rejected'
    }
}

    render() {
        //дестроктуризация
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        //Стейт-машина
        //перепишем через 4 состояния (простой, загрузка, ошибка, resolved
        if (status === 'idle') {
            return <div>Введите имя покемона.</div>
        }
        if (status === 'pending') {
            // return <div>Загружаем...</div>
            return <PokemonPendingView pokemonName={pokemonName}/>
        }
        if (status === 'rejected') {
            // return <h1>{error.message}</h1>
            return <PokemonErrorView message={error.message} />;
        }
        if (status === 'resolved') {
            return <PokemonDataView pokemon={pokemon}/>;      //пропом передаем целиком покемона
}
  //перепишем через 4 состояния (простой, загрузка, ошибка, resolved
        // return (
        //     <div>
        //         {/* если есть ошибка */}
        //         {error && <h1>{error.message}</h1>}
                
        //         {loading && <div>Загружаем...</div>}
        //         {/* если нету this.props.pokemonName то выводим */}
        //         {!pokemonName && <div>Введите имя покемона.</div>}
        //         {pokemon && (
        //             <div>
        //             <p>{pokemon.name}</p>
        //             <img
        //                 src={pokemon.sprites.other['official-artwork'].front_default}
        //                 alt={pokemon.name}
        //                 width="300" 
                        
        //             />
        //             </div>
        //         )}
        //     </div>)
    }
};

//----------------------------------------------------------------------------------------------------

//  !!!!  не находит other в пути картинки
// {pokemon.sprites.other['official-artwork'].front_default}

//то, что пришло по запросу:
// abilities: [{ability: {name: "limber", url: "https://pokeapi.co/api/v2/ability/7/"}, is_hidden: false, slot: 1},…]
// base_experience: 101
// forms: [{name: "ditto", url: "https://pokeapi.co/api/v2/pokemon-form/132/"}]
// game_indices: [{game_index: 76, version: {name: "red", url: "https://pokeapi.co/api/v2/version/1/"}},…]
// height: 3
// held_items: [{item: {name: "metal-powder", url: "https://pokeapi.co/api/v2/item/234/"},…},…]
// id: 132
// is_default: true
// location_area_encounters: "https://pokeapi.co/api/v2/pokemon/132/encounters"
// moves: [{move: {name: "transform", url: "https://pokeapi.co/api/v2/move/144/"},…}]
// name: "ditto"
// order: 203
// past_types: []
// species: {name: "ditto", url: "https://pokeapi.co/api/v2/pokemon-species/132/"}
// sprites: {,…}
    // back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
    // back_female: null
    // back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png"
    // back_shiny_female: null
    // front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    // front_female: null
    // front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
    // front_shiny_female: null
    // other: {dream_world: {,…}, home: {,…}, official-artwork: {,…}}
            // dream_world: {,…}
            // home: {,…}
            // official-artwork: {,…}
                  // front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
    // versions: {generation-i: {red-blue: {,…}, yellow: {,…}},…}
// stats: [{base_stat: 48, effort: 1, stat: {name: "hp", url: "https://pokeapi.co/api/v2/stat/1/"}},…]
// types: [{slot: 1, type: {name: "normal", url: "https://pokeapi.co/api/v2/type/1/"}}]
// weight: 40