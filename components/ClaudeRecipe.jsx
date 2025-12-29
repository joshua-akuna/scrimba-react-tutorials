import ReactMarkdown from 'react-markdown';

export default function Recipe(props) {
  return (
    <section className='recipe-container' aria-live='polite'>
      {props.recipe && <h1>Chef Claude Recommends: </h1>}
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
