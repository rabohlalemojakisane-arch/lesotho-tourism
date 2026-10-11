import { attractions } from '../data';

function Featured({ setCurrentPage }) {
  const featured = attractions.slice(0, 3);

  return (
    <section className="featured">
      <h2>Featured Destinations</h2>
      <div className="featured-grid">
        {featured.map((item) => (
          <div key={item.id} className="featured-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.location}</p>
            <button
              className="featured-btn"
              onClick={() => setCurrentPage('attractions')}
            >
              View All Attractions
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;
