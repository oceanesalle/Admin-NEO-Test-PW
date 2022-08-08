import React from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

const Recipe = () => {
  const [title, setTitle] = useState ([]); 
  const [description, setDescription] = useState ([]); 
  const [person, setPerson] = useState ([]); 
  const [time, setTime] = useState ([]); 
  const [ingredients, setIngredients] = useState ([]); 
  
  

  useEffect(() => {
    axios.get(`http://localhost:5000/recipe/${id}`).then(({ data }) => {
      setRecipe(data);
    });
  }, []);

  return (
    <section className="Recipe">
      
      </section>
    </section>
  )
}

export default Recipe