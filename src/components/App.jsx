import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify'; //библеотека вместо alert
import PokemonForm from './Pokemon/PokemonForm/PokemonForm';
import PokemonInfo from './Pokemon/PokemonInfo/PokemonInfo';

import { Example } from './Video/Example.js'; //video

import { Reader } from './Reader/Reader'; 
// import publications from '../data/publications.json'; //в reader сделали через бекэнд

//Первый был Покемон, остальное докинула, что бы не создавать отдельные проекты
class App extends Component {
      state = {
        pokemonName: ''
        
      }
      
      //делаем метод, что бы потом его передать в форму, и через него вернуть, что ввели в форму 
      //сюда приходит pokemonName
      handleFormSubmit = pokemonName => {
        // console.log('in App:', pokemonName);
        this.setState({ pokemonName });
      }

      render() {
        return (
          <>
             <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
          App POKEMON
          <PokemonForm onSubmitQwe={this.handleFormSubmit} />
            <PokemonInfo pokemonName={this.state.pokemonName} />
            
          <ToastContainer autoClose={3000} />

          {/* ---videoPlayer--- */}
            <Example />
            
          {/*--- Reader ---*/}
            {/* <Reader items={publications} /> */}
            <Reader />

            </div>
            <div>
              <h2>--------------------- Hooks --------------------------------------------</h2>
            </div>
         </>
        );
      }
}

export default App;

//!!!!!!!Нехочет работать тост уведомление




//-------------------------------------------------------------
//Простой вариант http запроса
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };

//   componentDidMount() {
//     this.setState({ loading: true });
    
//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon }))
//         .finally(() => this.setState({loading: false }));
//     }, 1000);
// }

//   render() {
//     return (<div style={{maxWidth: 1170, margin: '0 auto', padding: 20}}>
//         {this.state.loading && <h1>Загружаем ...</h1>}
//         {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
//       </div>
//     );
//   }
// }

// export default App;