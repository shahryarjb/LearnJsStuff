import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

const EventDetailPage = () => {

  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

// export async function getServerSideProps({ query }) {
//   const event = getEventById(query.eventId);

//   return {
//     props: {event: event},
//   }
// }