import { useState } from 'react';

export default function ClaudeMain() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

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
        <section className='ingredients-container'>
          <h2>Ingredients on hand:</h2>
          <ul className='ingredient-list' aria-live='polite'>
            {ingredientListItems}
          </ul>
          {ingredients.length > 3 && (
            <div className='get-recipe-container'>
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
              </div>
              <button onClick={toggleRecipeShown}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
      {recipeShown && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          voluptates libero tempora distinctio similique! Rem eligendi veritatis
          facilis maxime praesentium delectus voluptatum repellat provident
          voluptates, odit error non vitae quam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laudantium, cupiditate. Nobis magnam
          corrupti enim architecto facilis deserunt voluptas tenetur delectus!
          Neque deserunt necessitatibus dolores unde cupiditate quas similique
          vitae adipisci dolorem error expedita, dolore reprehenderit ullam nisi
          asperiores officiis aut aspernatur! Veritatis autem tempore magni unde
          nobis excepturi. Pariatur autem qui consectetur exercitationem itaque
          tempore minus vitae molestias corrupti libero sequi blanditiis
          quibusdam quae, officiis, officia eius? Voluptate accusantium quod
          omnis incidunt assumenda? Excepturi aut, ullam dicta quae facere
          molestiae magni voluptatibus delectus natus voluptas maiores
          reiciendis odio dolor molestias hic libero necessitatibus nesciunt
          similique quidem iusto nihil fugiat placeat. Aliquid quam tempore
          ipsa, nam ad itaque molestiae? Tenetur, ad? Quam expedita labore
          ducimus animi cum quasi quo voluptate itaque vel hic, dicta explicabo
          doloremque maiores, alias minus aspernatur consectetur quaerat ipsum
          corrupti esse nam quae optio laboriosam eius. Repellendus temporibus
          vel vero eos saepe iste accusantium molestias, perferendis, aut
          obcaecati quo a, delectus aliquam praesentium ipsa? Deserunt corrupti
          sed eos delectus. Id in obcaecati dolor amet, consectetur saepe, vel
          quisquam ex veniam consequatur repellat error eaque voluptas
          blanditiis fugit quibusdam voluptatum quasi facere ipsa reprehenderit
          molestias tempore? Fuga ab suscipit dignissimos optio vitae assumenda
          rerum error, vel quas, quod itaque. Pariatur ipsa nulla iste
          architecto officiis possimus error dolor vitae. Quis repellat adipisci
          amet voluptas sapiente, officia veritatis reiciendis rerum, aliquam
          neque, dicta quo inventore! Ullam tempora non, natus minus, laboriosam
          ratione iusto odit porro sint quae tenetur nesciunt accusamus eaque
          voluptatibus, obcaecati sed reiciendis sunt hic aperiam labore? Quas
          at quos dolorem dolorum nihil, est a eos corporis repellat ratione id,
          incidunt ex culpa deserunt eveniet voluptates tempora fuga. Molestiae
          praesentium neque laboriosam nulla quibusdam. Debitis suscipit culpa
          possimus et dolorum error consequatur beatae! Quam, velit error
          accusamus blanditiis officiis aperiam, asperiores voluptatum corporis
          quidem animi, aut molestias?
        </p>
      )}
    </main>
  );
}
