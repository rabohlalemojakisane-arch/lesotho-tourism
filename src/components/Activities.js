import { activities } from '../data';

function Activities() {
  return (
    <section className="activities">
      <h2>Popular Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <span className="activity-icon">{activity.icon}</span>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;