import MovieHero from "../components/MovieHero";
import MovieCarousel from "../components/MovieCarousel";
import GenresSection from "../components/GenresSection";

function Home() {
  return (
    <div>
      <MovieHero />
      
      {/* MovieCarousel faqat sm (640px) va undan katta ekranlarda ko‘rinadi */}
      <div className="hidden sm:block">
        <MovieCarousel />
      </div>

      <GenresSection />
    </div>
  );
}

export default Home;
