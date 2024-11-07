// App.jsx
import { useState } from 'react';
import Card from './Components/Card.jsx';
import './App.css'; // Importamos el archivo CSS

function App() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [song, setSong] = useState('');
  const [group, setGroup] = useState('');
  const [errors, setErrors] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleGenreChange = (e) => setGenre(e.target.value);
  const handleSongChange = (e) => setSong(e.target.value);
  const handleGroupChange = (e) => setGroup(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];
    if (name.length === 0) {
      newErrors.push('El nombre no puede estar vacío.');
    }
    if (genre.length < 3 || genre.startsWith(' ')) {
      newErrors.push('El género debe tener al menos 3 caracteres y no debe comenzar con un espacio.');
    }
    if (song.length < 3) {
      newErrors.push('La canción debe tener al menos 3 caracteres.');
    }
    if (group.length < 6) {
      newErrors.push('El grupo debe tener al menos 6 caracteres.');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      setSubmittedData(null);
    } else {
      setErrors([]);
      setSubmittedData({ name, genre, song, group });
    }
  };

  const handleReset = () => {
    setName('');
    setGenre('');
    setSong('');
    setGroup('');
    setSubmittedData(null);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-group">
          <label className="fixed-label">Nombre</label>
          <input type="text" value={name} onChange={handleNameChange} className="input-field" />
        </div>
        <div className="input-group">
          <input
            type="text"
            value={genre}
            onChange={handleGenreChange}
            className="input-field"
            placeholder="Ingrese su Género favorito"
          />
          {genre && <label className="floating-label">Género favorito</label>}
        </div>
        <div className="input-group">
          <input
            type="text"
            value={group}
            onChange={handleGroupChange}
            className="input-field"
            placeholder="Ingrese su Grupo favorito"
          />
          {group && <label className="floating-label">Grupo favorito</label>}
        </div>
        <div className="input-group">
          <input
            type="text"
            value={song}
            onChange={handleSongChange}
            className="input-field"
            placeholder="Ingrese su Canción favorita"
          />
          {song && <label className="floating-label">Canción favorita</label>}
        </div>
        <button type="submit" className="button">Enviar</button>
        <button type="button" onClick={handleReset} className="button">Limpiar</button>
      </form>
      {errors.length > 0 && (
        <div>
          <h3>Por favor chequea que la información sea correcta:</h3>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      {submittedData && <Card {...submittedData} />}
    </div>
  );
}

export default App;