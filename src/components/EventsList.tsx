import { useEffect, useState } from 'react';
import { supabase, Event } from '../lib/supabase';
import EventCard from './EventCard';
import './EventsList.css';

export default function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="events-section">
        <div className="events-container">
          <div className="loading">Loading events...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
