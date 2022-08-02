import React, { useState, useContext } from 'react'

// THIRD PARTY
import axios from 'axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// INTERNAL
import { useCreateClub } from '../../hooks';


export default function CreateNewClubModal(props) {
  
  const [newClub, setNewClub] = useState({
    name: "Test Club Created by Client",
    members: []
  })
  
  const [open, setOpen] = React.useState(false);
  const [clubName, setClubName] = useState("Test Club Created by Client")



  const handleClose = () => {
    setOpen(false);
  };
  const saveNewClub = async () => {
    // const { clubData, isLoading } = useCreateClub(clubName)
    try {
      const { data: response } = await axios.post("https://data.mongodb-api.com/app/masterymath-hfkbw/endpoint/clubs", clubName);
      console.log(`Create Club Modal got response to POST request: ${response}`);
      
      setClubName(response);
    } catch (error) {
      console.error(error)
    }
    setOpen(false);

  }

  // useEffect(() => {
  //   const saveNewClub = async () => {
  //     try {
  //       const { data: response } = await axios.post("https://data.mongodb-api.com/app/masterymath-hfkbw/endpoint/clubs", newClub);
  //       console.log(`useCreateClub got response to POST request: ${response}`);
        
  //       setClubData(response);
  //     } catch (error) {
  //       console.error(error)
  //     }
  //     setIsLoading(false);
  //   };
  // }, []);

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Create a Club
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Create a New Club</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a name for your new club. You will be able to add members to it after it is created.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button 
            variant="outlined" 
            color="error"
            onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            variant="outlined" 
            color="success"
            onClick={saveNewClub}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
