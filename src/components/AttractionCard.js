function AttractionCard({ attraction, onSelect }) {
  return (
    <div className="attraction-card">
      <img src={attraction.image} alt={attraction.name} />
      <div className="attraction-card-body">
        <span className="category-tag">{attraction.category}</span>
        <h3>{attraction.name}</h3>
        <p className="location">📍 {attraction.location}</p>
        <p className="description">{attraction.description}</p>
        <button className="view-btn" onClick={() => onSelect(attraction)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default AttractionCard;
