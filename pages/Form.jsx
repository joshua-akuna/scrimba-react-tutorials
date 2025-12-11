export default function FormPage() {
  function handleSubmit(event) {
    // prevents the default action of the form
    event.preventDefault();
    // gets the form elements
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    // gets the email from the email input field
    const email = formData.get('email');
    // log the email
    console.log(email);
    // reset all input fields
    formEl.reset();
  }

  return (
    <section className='form-wrapper'>
      <h1>Signup form</h1>
      <form action='' method='get' onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
    </section>
  );
}
