export default function IngedientList(props) {
  // create a list of React elements from the list of ingredients
  const ingredientListItems = props.ingredients.map(function (ingredient) {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section className='ingredients-container'>
      <h2>Ingredients on hand:</h2>
      {/* displays the list of ingredients */}
      <ul className='ingredient-list' aria-live='polite'>
        {ingredientListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className='get-recipe-container'>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.handleClick}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
