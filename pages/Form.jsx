export default function FormPage() {
  function handleSubmit(event) {
    // prevents the default action of the form
    event.preventDefault();
    // gets the form elements
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    // gets the email from the email input field
    const email = formData.get('email');
    const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    const favColor = formData.get('favColor');
    // log the email
    console.log(email);
    // reset all input fields
    formEl.reset();
  }

  function signUp(formData) {
    const data = Object.fromEntries(formData);
    // console.log(data);
    const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    const allData = { ...data, dietaryRestrictions };
    console.log(allData);
  }

  return (
    <section className='form-wrapper'>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          placeholder='johndoe@mail.com'
          id='email'
        />

        <br />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='xxxxxxx'
        />

        <br />

        <label htmlFor='description'>Description</label>
        <textarea name='description' id='description' cols='30'></textarea>

        <br />

        <fieldset className='employment-status'>
          <legend>Employment status</legend>
          <label htmlFor='employed'>
            <input
              type='radio'
              name='employmentStatus'
              id='employed'
              value={'unemployed'}
              defaultChecked
            />
            Unemployed
          </label>
          <label htmlFor='part-time'>
            <input
              type='radio'
              name='employmentStatus'
              id='part-time'
              value={'part time'}
            />
            Part time
          </label>
          <label htmlFor='full-time'>
            <input
              type='radio'
              name='employmentStatus'
              id='full-time'
              value={'full time'}
            />
            Full times
          </label>
        </fieldset>

        <br />

        <fieldset className='dietary-restrictions'>
          <legend>Dietary Restrictions</legend>
          <label htmlFor='kosher'>
            <input
              type='checkbox'
              name='dietaryRestrictions'
              id='kosher'
              value={'kosher'}
              defaultChecked
            />
            {'Kosher'}
          </label>
          <label htmlFor='vegan'>
            <input
              type='checkbox'
              name='dietaryRestrictions'
              id='vegan'
              value={'vegan'}
            />
            {'Vegan'}
          </label>
          <label htmlFor='gluten-free'>
            <input
              type='checkbox'
              name='dietaryRestrictions'
              id='gluten-free'
              value={'gluten-free'}
            />
            {'Gluten-free'}
          </label>
        </fieldset>

        <br />

        <label htmlFor='favColor'>What is your favorite color?</label>
        <select name='favColor' id='favColor' defaultValue={''} required>
          <option value='' disabled>
            -- Choose a color --
          </option>
          <option value='red'>Red</option>
          <option value='orange'>Orange</option>
          <option value='yellow'>Yellow</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='indigo'>Indigo</option>
          <option value='violet'>Violet</option>
        </select>

        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}
