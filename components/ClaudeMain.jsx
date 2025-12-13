import { useState } from 'react';
import Recipe from './ClaudeRecipe';
import IngedientList from './IngredientsList';

export default function ClaudeMain() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

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
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    // reset input fiels
    formEl.reset();
  }

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
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
        <IngedientList
          ingredients={ingredients}
          handleClick={toggleRecipeShown}
        />
      )}
      {recipeShown && <Recipe />}
    </main>
  );
}
