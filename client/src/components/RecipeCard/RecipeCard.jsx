import { Link } from 'react-router-dom';
import Services from '../../services/services.js';
import './RecipeCard.css';

const RecipeCard = ({ title, text, id, image }) => {
  const desc = Services.stripTag(text);
  const description = Services.strLimit(desc, 100);

  return (
    <div className="RecipeCard">
      <img src={image} alt={`Recipe ${title}`} />
      <div className="item-container">
        <Link to={`/recipe/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <p className="dots">...</p>
        <Link to={`/recipe/${id}`}>Voir Plus</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
