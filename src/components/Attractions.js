import { useState } from 'react';
import { attractions, categories } from '../data';
import AttractionCard from './AttractionCard';
import AttractionDetails from './AttractionDetails';

function Attractions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const filteredAttractions = attractions.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="attractions">
      <h2>Explore Lesotho Attractions</h2>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search attractions by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={
                selectedCategory === cat
                  ? 'category-btn active'
                  : 'category-btn'
              }
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="results-count">
        Showing {filteredAttractions.length} of {attractions.length} attractions
      </p>

      {filteredAttractions.length === 0 ? (
        <p className="no-results">No attractions match your search.</p>
      ) : (
        <div className="attractions-grid">
          {filteredAttractions.map((item) => (
            <AttractionCard
              key={item.id}
              attraction={item}
              onSelect={setSelectedAttraction}
            />
          ))}
        </div>
      )}

      {selectedAttraction && (
        <AttractionDetails
          attraction={selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
        />
      )}
    </section>
  );
}

export default Attractions;
