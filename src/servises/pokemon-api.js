function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      //если прийдет ответ (200) распарсим
      return response.json();
    }
    return Promise.reject(new Error(`Нет покемона с именем ${name}`)); //если прийдет ошибка 404
  });
}
//сделали обьект
const api = {
  fetchPokemon,
};

export default api;
