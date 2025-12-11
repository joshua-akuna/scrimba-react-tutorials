import { useState } from 'react';

export default function ClaudeMain() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientListItems = ingredients.map(function (ingredient) {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredient');
    // ingredients.push(newIngredient);
    // console.log(ingredients);
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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
