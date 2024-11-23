import Filter from "../common/components/Filter";
import './Home.css'

function Home() {
  const ITEMS = [
    'Todo', 'Música', 'Podcast'
  ];
  
  return (
    <>
      <div className="hm-cont">
        <header className="hm-header">
          <Filter items={ ITEMS } indexSelected={ 0 } />
        </header>
        <main className="hm-main">
          <section className="hm-hero-section"></section>
          <section className="hm-playlists"></section>
        </main>
      </div>
    </>
  )
}

export default Home;