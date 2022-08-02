// From this tutorial --> https://dev.to/darkmavis1980/fetching-data-with-react-hooks-and-axios-114h
import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchClubs = () => {
  const [clubData, setClubData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("https://data.mongodb-api.com/app/masterymath-hfkbw/endpoint/clubs");
        console.log(`fetchData got ${response}`);
        
        setClubData(response);
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false);
    };

    fetchData();

  }, []);

  console.log(`useFetchClubs called!!! `);

  return {
    clubData,
    isLoading,
  };
};

export default useFetchClubs;