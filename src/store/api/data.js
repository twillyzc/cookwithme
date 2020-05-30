import { axios } from 'axios';

export const getRecipes = () => {
  return axios.get(
    'https://api.spoonacular.com/recipes/search?query=pizza&apiKey=eabcd8e465554eb996d607d272f86d49'
  );
};
