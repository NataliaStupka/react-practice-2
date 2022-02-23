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



