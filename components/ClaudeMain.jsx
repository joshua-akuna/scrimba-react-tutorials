import { useState } from 'react';

export default function ClaudeMain() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientListItems = ingredients.map(function (ingredient) {
    return <li key={ingredient}>{ingredient}</li>;
  });

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
      {ingredientListItems}
    </main>
  );
}
