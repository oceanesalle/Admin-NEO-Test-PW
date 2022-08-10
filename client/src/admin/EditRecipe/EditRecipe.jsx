import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UxContext } from '../../contexts/UxContext';
import { useParams } from 'react-router-dom';
import { DefaultEditor } from 'react-simple-wysiwyg';
import './EditRecipe.css';

const EditRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [person, setPerson] = useState(0);
  const [time, setTime] = useState(0);
  const [ingredients, setIngredients] = useState('');


  const { id } = useParams();
  const { reponse, reponseType, handleMessage } = useContext(UxContext);

  useEffect(() => {
    axios.get(`http://localhost:5000/recipe/${id}`).then(({ data }) => {
      setTitle(data.title);
      setDescription(data.description);
      setImage(data.image);
      setPerson(data.person);
      setTime(data.time);
      setIngredients(data.ingredients);
    });
  }, [id]);

  const formData = new FormData();

  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('person', person);
    formData.append('time', time);
    formData.append('ingredients', ingredients);
    
    if (title !== '' && image !== null && description !== '' && time !== 0 && person !== 0 && ingredients !== '') {
      const updated = await axios.put(
        'http://localhost:5000/recipe',
        formData,
        config,
        {}
      );

      if (updated) {
        handleMessage('valid', 'Votre recette a bien été mise à jour', 3000);
        axios.get(`http://localhost:5000/recipe/${id}`).then(({ data }) => {
          setTitle(data.title);
        });
      } else {
        handleMessage(
          'alert',
          'La recette na pas été mise à jour.',
          3000
        );
      }
    } else {
      handleMessage('alert', 'Votre recette ne doit pas être vide', 3000);
    }
  };
  return (
    <div className="EditRecipe dashboard-main">
      <div className="dashboard-edit">
        <h1>Recette</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="image-container">
            <input type="file" onChange={handleFile} />
            <div
              className="image-preview"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
          <input
            type="text"
            placeholder="Nom de la recette"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DefaultEditor
            value={description}
            className="editor"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="button edit-button" type="submit">
            Mettre à jour
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

export default EditRecipe;