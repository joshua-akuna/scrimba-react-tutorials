import Header from '../components/GlobeHeader';
import Entry from '../components/Entry';

export default function Journal() {
  return (
    <>
      <Header />
      <main className='entries-container'>
        <Entry
          img={{
            src: 'https://scrimba.com/links/travel-journal-japan-image-url',
            alt: 'Mount Fuji',
          }}
          title='Mount Fuji'
          country='Japan'
          googleMapLink='http://www.google.com'
          dates='12 Jan, 2021 - 24 Jan, 2021'
          text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
(12,380 feet). Mount Fuji is the single most popular tourist site in
Japan, for both japanese and foreign tourists'
        />
      </main>
    </>
  );
}
