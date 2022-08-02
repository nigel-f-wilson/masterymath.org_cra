// From this tutorial --> https://dev.to/darkmavis1980/fetching-data-with-react-hooks-and-axios-114h

import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchRestaurants = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("https://data.mongodb-api.com/app/masterymath-hfkbw/endpoint/restaurants");
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchRestaurants;