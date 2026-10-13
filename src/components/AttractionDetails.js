function AttractionDetails({ attraction, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <img src={attraction.image} alt={attraction.name} className="modal-image" />

        <div className="modal-body">
          <span className="category-tag">{attraction.category}</span>
          <h2>{attraction.name}</h2>
          <p className="location">📍 {attraction.location}</p>
          <p className="description">{attraction.description}</p>

          <h3>Activities Available</h3>
          <ul className="activities-list">
            {attraction.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>

          <p className="cost">
            <strong>Estimated Cost:</strong> {attraction.cost}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AttractionDetails;