import { Event } from '../lib/supabase';
import './EventCard.css';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="event-card">
      <div className="event-image-container">
        <img src={event.image_url} alt={event.name} className="event-image" />
      </div>
      <div className="event-details">
        <h3 className="event-name">{event.name}</h3>
        <p className="event-description">{event.description}</p>
        <div className="event-info">
          <div className="event-info-row">
            <span className="event-location">{event.location}</span>
            <span className="event-datetime">{formatDate(event.date)} {event.time}</span>
          </div>
          <div className="event-info-row">
            <span className="event-venue">{event.venue}</span>
            <span className="event-category">{event.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
