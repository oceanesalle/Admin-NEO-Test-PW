import React from 'react';
import RecipeCard from './../../components/RecipeCard/RecipeCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipe.css';

const Recipe = () => {
  const [dataRecipe, setDataRecipe] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/recipe')
      .then(({ data }) => setDataRecipe(data));
  }, []);

  return (
    <section className="Recipe-page">
      <h1>Recette</h1>
      <div className="div-recipecard">
        {dataRecipe?.map((recipe) => (
          <RecipeCard key={recipe.id} datas={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Recipe;
