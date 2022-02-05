import { Component } from 'react';
import { ImSearch } from "react-icons/im";
import { toast } from 'react-toastify'; //вместо alert

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };

    //обновляет pokemonName при каждом вводе на input
    handleNameChange = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() })
        console.log('in form:', event.currentTarget.value)
}

    handleSubmit = event => {
        event.preventDefault();

        //запрещаем отсылать пустой http запрос (ничего невведено, пустое поле)
        //trim - убирает пробелы слева/справа
        if (this.state.pokemonName.trim() === '') {
         return alert('Введите имя покемона');
        //    return toast('Введите имя покемона.');  --НЕ срабатывает
            
        }

        //вызываю метод из App и предаю ему значение pokemonName, и он вернется в  App
        this.props.onSubmitQwe(this.state.pokemonName);
        this.setState({ pokemonName: '' })
    };
    
    render() {
        return (
             <form onSubmit={this.handleSubmit} style={styles.form}>
                <input type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                />
                <button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Найти
                </button>
        </form>
    )


}



}