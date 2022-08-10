import { useState, useContext } from 'react';
import axios from 'axios';
import { UxContext } from '../../contexts/UxContext';
import { DefaultEditor } from 'react-simple-wysiwyg';
import './AddRecipe.css';

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [person, setPerson] = useState(0);
  const [time, setTime] = useState(0);
  const [ingredients, setIngredients] = useState('');

  const { reponse, reponseType, handleMessage } = useContext(UxContext);

  const formData = new FormData();

  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('person', person);
    formData.append('time', time);
    formData.append('ingredients', ingredients);
    if (title !== '' && image !== null && description !== '' && time !== 0 && person !== 0 && ingredients !== '') {
      axios.post('http://localhost:5000/recipe', formData, config, {});
      
      handleMessage('valid', 'Votre recette a bien été créé', 5000);
      window.location.replace('http://localhost:3000/admin/recipe');
    } else {
      handleMessage('alert', 'Votre recette ne doit pas être vide', 5000);
    }
  };

  return (
    <div className="AddRecipe dashboard-main">
      <div className="dashboard-add">
        <h1>Blog de recette</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom de la recette"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="input-container">
            <input
              type="number"
              id="person"
              placeholder="Nombre de personne"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
            />
            <label htmlFor="person">people</label>
            <input
              type="number"
              id="time"
              placeholder="Temps de la prestation"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <label htmlFor="time">min</label>
          </div>
          <DefaultEditor
            value={description}
            className="editor"
            onChange={(e) => setDescription(e.target.value)}
          />
          <DefaultEditor
            value={ingredients}
            className="editor"
            onChange={(e) => setIngredients(e.target.value)}
          />
          <input type="file" onChange={handleFile} className="image-uploader" />
          <button className="button add-button" type="submit">
            Ajouter
          </button>
        </form>
        {reponse !== '' ? (
          <div className={`created ${reponseType}`}>{reponse}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AddRecipe;
