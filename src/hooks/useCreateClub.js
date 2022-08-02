// From this tutorial --> https://dev.to/darkmavis1980/fetching-data-with-react-hooks-and-axios-114h
import { useEffect, useState} from 'react';
import axios from 'axios';

const useCreateClub = (newClubName) => {
        
  console.log(`useCreateClub got ${JSON.stringify(newClubName,null,4)}`);
  
  
  
  
  const [clubData, setClubData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saveNewClub = async () => {
      try {
        const { data: response } = await axios.post("https://data.mongodb-api.com/app/masterymath-hfkbw/endpoint/clubs", newClubName);
        console.log(`useCreateClub got response to POST request: ${response}`);
        
        setClubData(response);
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false);
    };

    saveNewClub();

  }, []);

  console.log(`useCreateClub called!!! `);

  return {
    clubData,
    isLoading,
  };
};

export default useCreateClub;