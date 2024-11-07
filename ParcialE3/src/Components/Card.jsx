// Card.jsx
//import React from 'react';
import './Card.css'; // Importamos el archivo CSS
import PropTypes from 'prop-types';

function Card({ name, genre, song, group }) {
  return (
    <div className="card-container">
      <h2>Hola {name}!!</h2>
      <h3>Estos son tus gustos musicales:</h3>
      <p>Género favorito: {genre}</p>
      <p>Grupo favorito: {group}</p>
      <p>Canción favorita: {song}</p>
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

export default Card;