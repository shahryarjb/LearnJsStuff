import { getFeaturedEvents } from '../dummy-data';
import EvenList from '../components/events/event-list';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EvenList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
