import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/results-title/results-title';
import ErrorAlert from '../../components/error-alert/error-alert';
import { Fragment } from 'react';
import Button from '../../components/ui/button';

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <Fragment>
        <p className="center">Loading...</p>
      </Fragment>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
        <p>Invalid Filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all Evenets</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvenets = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvenets || filteredEvenets.length === 0) {
    return (
      <Fragment>
        <p>No events found for the chosen filter</p>
        <div className="center">
          <Button link="/events">Show all Evenets</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvenets} />
    </Fragment>
  );
};

export default FilteredEventsPage;
