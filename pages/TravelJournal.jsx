import Header from '../components/GlobeHeader';
import Entry from '../components/Entry';
import journals from '../data/jornal';

export default function Journal() {
  const entryElements = journals.map(function (journal) {
    return (
      <Entry
        id={journal.id}
        img={journal.img}
        title={journal.title}
        country={journal.country}
        googleMapsLink={journal.googleMapsLink}
        dates={journal.dates}
        text={journal.text}
      />
    );
  });

  return (
    <>
      <Header />
      <main className='entries-container'>{entryElements}</main>
    </>
  );
}
