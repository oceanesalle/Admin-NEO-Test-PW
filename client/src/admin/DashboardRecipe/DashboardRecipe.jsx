import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import axios from 'axios';
import Services from '../../services/services.js';
import './DashboardRecipe.css';

const DashboardRecipe = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipe').then(({ data }) => {
      setRecipe(data);
    });
  }, []);

  return (
    <div className="DashboardRecipe dashboard-main">
      <div className="dashboard-home">
        <table className="Table">
          <thead>
            <tr>
              <th>Recette</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipe?.map((s) => (
              <tr key={s.id}>
                <td>{s.title}</td>
                <td>
                  <div className="button-container">
                    <Link to={`edit/${s.id}`}>
                      <button className="edit">
                        <FaRegEdit />
                      </button>
                    </Link>
                    <button
                      className="trash"
                      onClick={() =>
                        Services.handleDelete('recipe', s.id, setRecipe)
                      }
                    >
                      <BsTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="add">
          <button className="button add-button">Ajouter</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardRecipe;