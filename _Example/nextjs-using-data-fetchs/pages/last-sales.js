import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(
    'https://react-redux-main-43799-default-rtdb.europe-west1.firebasedatabase.app/sales.json',
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load...</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    'https://react-redux-main-43799-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
  );
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: { sales: transformedSales},
  };
}

export default LastSalesPage;

// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   setIsLoading(true);
//   fetch(
//     'https://react-redux-main-43799-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       const transformedSales = [];

//       for (const key in data) {
//         transformedSales.push({
//           id: key,
//           username: data[key].username,
//           volume: data[key].volume,
//         });
//       }

//       setSales(transformedSales);
//       setIsLoading(false);
//     });
// }, []);
