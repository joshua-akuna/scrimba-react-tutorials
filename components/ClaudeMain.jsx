import { useState } from 'react';
import Recipe from './ClaudeRecipe';
import IngedientList from './IngredientsList';
import { geminiRecipe } from '../src/lib/AIclients';
import Loader from '/images/Spinner.svg';

export default function ClaudeMain() {
  // state for the array of ingredients
  const [ingredients, setIngredients] = useState([]);
  // state for the recipe response
  const [recipe, setRecipe] = useState('');
  // state for isLoading
  const [isLoading, setIsLoading] = useState(false);

  // The function populates the ingredient array
  function handleSubmit(event) {
    event.preventDefault();
    // get the form elements
    const formEl = event.currentTarget;
    // create a new FormData
    const formData = new FormData(formEl);
    // get the data from an input field
    const newIngredient = formData.get('ingredient');
    // ingredients.push(newIngredient);
    // console.log(ingredients);
    // update the ingredient state
    if (newIngredient.trim().length > 0) {
      setIngredients(function (prevIngredients) {
        return [...prevIngredients, newIngredient];
      });
    }
    // reset input fields
    formEl.reset();
  }

  // The function gets the recipe from the gemini API
  async function toggleRecipe() {
    setIsLoading(true);
    // const newRecipe = await getGeminiResponse(ingredients);
    const newRecipe = await geminiRecipe(ingredients);
    setRecipe(newRecipe);
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div className='spinner'>
        <img src={Loader} alt='Spinner for page' />
      </div>
    );
  }

  return (
    <main className='claude-main'>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='ingredient'
          id='ingredient'
          placeholder='e.g. Oregano'
          aria-label='Add Ingredient'
        />
        <button>Add Ingedient</button>
      </form>
      {ingredients.length > 0 && (
        <IngedientList ingredients={ingredients} handleClick={toggleRecipe} />
      )}
      {/* if isLoading is false, display the recipe */}
      <Recipe recipe={recipe} />
    </main>
  );
}
