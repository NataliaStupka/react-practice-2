import errorImage from '../../miniatures/error.jpg';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="notfind" />
      <p>{message}</p>
    </div>
  );
}
