import axios from 'axios';

//дефолтные настройки
axios.defaults.baseURL = 'https://620a2d5e92946600171c585c.mockapi.io'; //базовый url

//тут делаем методы

//получаем все публикации с бекэнда
export const getPublications = async () => {
  //основнойurl прописан в дефолте
  const response = await axios.get('/publicatoins');
  return response.data;
};

//метод для добавления
export const addPublication = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};

//метод для удаления
export const deletePublication = async id => {
  const response = await axios.delete(`/publications/${id}`);
  return response.data;
};
